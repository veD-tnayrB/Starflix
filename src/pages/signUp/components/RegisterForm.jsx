import React, { useState, useContext } from 'react';
import Input from './Input';

import { Link } from 'react-router-dom';
import { UserContext } from '../../../contexts/userContext';

const RegisterForm = () => {
    const [signUpData, setSignUpData] = useState({ name: '', lastName: '', username: '', password: '', confirmPassword: '' })

    const updateData = (event) => {
        const { name, value } = event.target;

        setSignUpData(prevData => (
            {
                ...prevData,
                [name]: value
            }
        ))
    }

    const isNameCorrect = /^[A-Z]{1,1}[a-z]{2}/.test(signUpData.name)
    const isLastNameCorrect = /^[A-Z]{1,1}[a-z]{2}/.test(signUpData.lastName)
    const isUserNameCorrect = /[\w]{5}/.test(signUpData.username)
    const isPasswordCorrect = /[\w]{8}/.test(signUpData.password)
    const isPasswordEqual = signUpData.password === signUpData.confirmPassword;

    const isSomethingWrong = [isNameCorrect, isLastNameCorrect, isUserNameCorrect, isPasswordCorrect, isPasswordEqual].some(element => element === false);

    return (
        <div className="action-container">
            <div className="welcome-container">
                <h1>Welcome!</h1>
                <p>We are very proud that you are here</p>
            </div>

            <form
             className="sign-up-form"
            >
                <div className="basic-info">
                    <Input
                     label="Name"
                     value={signUpData.name}
                     onChange={updateData}
                     isCorrect={isNameCorrect}
                     input={{
                         name: "name",
                         placeholder: "John"
                        }}
                    />

                    <Input
                     label="Last Name"
                     value={signUpData.lastName}
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
                 value={signUpData.username}
                 onChange={updateData}
                 isCorrect={isUserNameCorrect}
                 input={{
                     name: "username",
                     placeholder: "JhonDoe_"
                    }}
                />

                <Input
                 label="Password"
                 value={signUpData.password}
                 onChange={updateData}
                 isCorrect={isPasswordCorrect}
                 input={{
                     name: "password",
                     placeholder: "JhonDoe_123"
                    }}
                />

                <Input
                 label="Confirm Password"
                 value={signUpData.confirmPassword}
                 onChange={updateData}
                 isCorrect={isPasswordEqual}
                 input={{
                     name: "confirmPassword",
                     placeholder: "JhonDoe_123"
                    }}
                />

                <span className="loggin">
                    Already logged in to this device?
                    <Link
                     className="loggin-link"
                     to="/log-in"
                    >
                        Log in
                    </Link>
                </span>

                <button
                 className="sign-up-button"
                    disabled={isSomethingWrong}
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