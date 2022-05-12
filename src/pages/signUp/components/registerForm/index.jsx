import { useNavigate, Link } from 'react-router-dom';

import useForm from 'hooks/useForm';
import Input from 'components/input';

import useUsers from 'contexts/users/useUsers';


const RegisterForm = () => {
    const form = useForm({
        name: '',
        lastName: '',
        userName: '',
        password: '',
        confirmPassword: ''
    })
    const {users, registerUser} = useUsers();
    const navigateTo = useNavigate();


    // Save the user in localStorage and send it to /
    const handleSubmit = (event) => {
        event.preventDefault();

        registerUser({ 
            name: form.info.name, 
            lastName: form.info.lastName, 
            userName: form.info.userName, 
            password: form.info.password 
        });
        navigateTo('/');
    }

    // This are the rules for each input value
    const isNameCorrect = /^[A-Z]{1,1}[a-z]{2}[\S]*$/.test(form.info.name);
    const isLastNameCorrect = /^[A-Z]{1,1}[a-z]{2}[\S]*$/.test(form.info.lastName);
    const isUserNameCorrect = /^[\w]{5}[\S]*$/.test(form.info.userName);
    const userAlreadyExists = users.some(user => user.userName === form.info.userName);
    const isPasswordCorrect = /^[\w]{8}[\S]*$/.test(form.info.password);
    const isPasswordEqual = form.info.password === form.info.confirmPassword;

    // Disable the "sign up button" if some rule is false
    const isSomethingWrong = [isNameCorrect, isLastNameCorrect, isUserNameCorrect, isPasswordCorrect, isPasswordEqual].some(element => element === false);


    return (
        <div className="action-container">
            <div className="welcome-container">
                <h1>Welcome!</h1>
                <p>We are very proud that you are here</p>
            </div>

            <form
             className="sign-up-form"
             onSubmit={handleSubmit}
            >
                <div className="basic-info">
                    <Input
                     label="Name"
                     value={form.info.name}
                     onChange={form.handleChange}
                     isCorrect={isNameCorrect}
                     input={{
                         type: "text",
                         name: "name",
                         placeholder: "John"
                     }}
                    />

                    <Input
                     label="Last Name"
                     value={form.info.lastName}
                     onChange={form.handleChange}
                     isCorrect={isLastNameCorrect}
                     input={{
                         type: "text",
                         name: "lastName",
                         placeholder: "Doe"
                     }}
                    />
                </div>

                <Input
                 label="User Name"
                 value={form.info.userName}
                 onChange={form.handleChange}
                 isCorrect={isUserNameCorrect}
                 errorMessage="User must have at least 5 letters/numbers"
                 input={{
                     type: "text",
                     name: "userName",
                     placeholder: "JhonDoe_"
                    }}
                />

                <Input
                 label="Password"
                 value={form.info.password}
                 onChange={form.handleChange}
                 isCorrect={isPasswordCorrect}
                 errorMessage="Password must be at least 8 letters/numbers"
                 input={{
                     type: "password",
                     name: "password",
                     placeholder: "JhonDoe_123"
                    }}
                />

                <Input
                 label="Confirm Password"
                 value={form.info.confirmPassword}
                 onChange={form.handleChange}
                 isCorrect={isPasswordEqual}
                 errorMessage="Must be equal to password to confirm"
                 input={{
                     type: "password",
                     name: "confirmPassword",
                     placeholder: "JhonDoe_123"
                    }}
                />

                {
                    users.length > 0 &&
                    <span className="loggin">
                        Already logged in to this device?
                        <Link
                         className="loggin-link"
                         to="/login"
                        >
                            Log in
                        </Link>
                    </span> 
                }

                {
                    userAlreadyExists &&
                    <span className="error-message">
                        Sorry but there is already a user with that username.
                    </span>
                }

                <button
                 className="main-button"
                    disabled={userAlreadyExists || isSomethingWrong}
                >
                    <span>
                        Sign Up
                    </span>
                </button>
            </form>
        </div>
    )
}

export default RegisterForm;