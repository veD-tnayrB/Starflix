import React, { useState, useContext, useEffect, useMemo } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import uniqid from 'uniqid';

import Input from '../../../../components/input';
import { UserContext } from '../../../../contexts/userContext';
import { createLocalStorage, isExistingUser, saveUser, getAllUsers, getUserRandomImage } from '../../../../services/users';;


const RegisterForm = () => {
    const [userData, setUserData] = useState({
        name: '',
        lastName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        userImage: getUserRandomImage(),
        id: uniqid()
    })
    const navigateTo = useNavigate();
    const { setLoggedUser } = useContext(UserContext);
    const thisUserAlreadyExist = useMemo(() => isExistingUser(userData), [userData.userName])


    // Create the local storage if it doesnt already exists
    useEffect(() => {
        createLocalStorage();
    }, [])

    // Handle the input changes
    const updateData = (event) => {
        const { name, value } = event.target;
        setUserData(prevData => (
            {
                ...prevData,
                [name]: value
            }
        ))
    }

    // Save the user in localStorage and send it to /home
    const handleSubmit = (event) => {
        event.preventDefault();

        saveUser(userData);
        setLoggedUser(() => userData);
        navigateTo('/home');

    }

    // This are the rules for each input value
    const isNameCorrect = /^[A-Z]{1,1}[a-z]{2}/.test(userData.name);
    const isLastNameCorrect = /^[A-Z]{1,1}[a-z]{2}/.test(userData.lastName);
    const isUserNameCorrect = /[\w]{5}/.test(userData.userName);
    const isPasswordCorrect = /[\w]{8}/.test(userData.password);
    const isPasswordEqual = userData.password === userData.confirmPassword;

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
                     value={userData.name}
                     onChange={updateData}
                     isCorrect={isNameCorrect}
                     input={{
                         name: "name",
                         placeholder: "John"
                     }}
                    />

                    <Input
                     label="Last Name"
                     value={userData.lastName}
                     onChange={updateData}
                     isCorrect={isLastNameCorrect}
                     input={{
                         name: "lastName",
                         placeholder: "Doe"
                     }}
                    />
                </div>

                <Input
                 label="User Name"
                 value={userData.userName}
                 onChange={updateData}
                 isCorrect={isUserNameCorrect}
                 errorMessage="User must have at least 5 letters/numbers"
                 input={{
                     name: "userName",
                     placeholder: "JhonDoe_"
                    }}
                />

                <Input
                 label="Password"
                 value={userData.password}
                 onChange={updateData}
                 isCorrect={isPasswordCorrect}
                 errorMessage="Password must be at least 8 letters/numbers"
                 input={{
                     name: "password",
                     placeholder: "JhonDoe_123"
                    }}
                />

                <Input
                 label="Confirm Password"
                 value={userData.confirmPassword}
                 onChange={updateData}
                 isCorrect={isPasswordEqual}
                 errorMessage="Must be equal to password to confirm"
                 input={{
                     name: "confirmPassword",
                     placeholder: "JhonDoe_123"
                    }}
                />

                {
                    getAllUsers().length > 0 &&
                    <span className="loggin">
                        Already logged in to this device?
                        <Link
                         className="loggin-link"
                         to="/log-in"
                        >
                            Log in
                        </Link>
                    </span> 
                }

                {
                    thisUserAlreadyExist &&
                    <span className="error-message">
                        Sorry but there is already a user with that username.
                    </span>
                }

                <button
                 className="main-button"
                 disabled={thisUserAlreadyExist || isSomethingWrong}
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