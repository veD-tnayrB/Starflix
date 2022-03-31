import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Input from '../../../../components/input';
import Modal from '../../../../components/modal';
import { UserContext } from '../../../../contexts/userContext';
import { getUser } from '../../../../services/users/';

import './loginform.scss';

const LoginForm = () => {
    const [userData, setUserData] = useState('');
    const [password, setPassword] = useState('');
    const isPasswordCorrect = password === userData.password;
    const { setLoggedUser, currentUser } = useContext(UserContext);
    const { userName } = useParams();
    const navigateTo = useNavigate();


    useEffect(() => {
        const userInfo = getUser(userName)

        if (!userInfo) {
            navigateTo('/', { replace: true });

        } else {
            setUserData(userInfo);

        }
    }, [])
    
    const updateValue = (event) => {
        const { value } = event.target;
        setPassword(value)
        
    }

    const handleLogin = () => {
        setLoggedUser(userData);
        navigateTo('/home', { replace: true });
    }


    return (
        <main className="log-in-form-container">
            <Modal>
                <article className="login-card">
                    <form onSubmit={handleLogin}>
                        <div className="image-container">
                            <img src={userData.userImage} className="user-img" />
                        </div>
                        <h1>{userData.userName}</h1>
                        <Input
                         label="Password"
                         value={password}
                         onChange={updateValue}
                         isCorrect={isPasswordCorrect}
                         errorMessage="Password is incorrect."
                         input={{
                             name: "password",
                             placeholder: "JhonDoe_123"
                         }}
                        />

                        <button
                         className="main-button"
                         disabled={!isPasswordCorrect}
                        >
                            Log in
                        </button>

                        <button
                         onClick={() => navigateTo(-1)}
                         className="secondary-button"
                            type="button"
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