import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Input from 'components/input';
import Modal from 'components/modal';

import useUsers from 'contexts/users/useUsers';
import useForm from 'hooks/useForm';

import './loginform.scss';

const LoginForm = () => {
    const form = useForm({ password: '' });
    const { users, logUser } = useUsers();
    const { userName } = useParams();
    const selectedUser = useMemo(() => (
        users.find(user => user.userName === userName)
    ), [users]);
    const navigateTo = useNavigate();


    const handleLogin = (event) => {
        event.preventDefault();

        logUser(selectedUser);
        navigateTo('/', { replace: true });
    }

    // Validators
    const isPasswordIncorrect = selectedUser.password !== form.info.password;


    return (
        <main className="log-in-form-container">
            <Modal>
                <article className="login-card">
                    <form onSubmit={handleLogin}>
                        <div className="image-container">
                            <img 
                             src={selectedUser.img} 
                             className="user-img"
                             alt="user profile"
                             title={selectedUser.userName}
                            />
                        </div>
                        <h1>{selectedUser.userName}</h1>
                        <Input
                         label="Password"
                         value={form.info.password}
                         onChange={form.handleChange}
                         isCorrect={!isPasswordIncorrect}
                         errorMessage="Password is incorrect."
                         input={{
                             type: "password",
                             name: "password",
                             placeholder: "JhonDoe_123"
                         }}
                        />

                        <button
                         className="main-button"
                         disabled={isPasswordIncorrect}
                        >
                            Log in
                        </button>

                        <button
                         onClick={() => navigateTo(-1)}
                         className="secondary-button"
                         type="reset"
                        >
                            Cancel
                        </button>
                    </form>
                </article>
            </Modal>
        </main>
    )
}

export default LoginForm;