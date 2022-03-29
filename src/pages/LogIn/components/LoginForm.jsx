import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../../components/Input';
import Modal from '../../../components/Modal';

import { UserContext } from '../../../contexts/userContext';

const LoginForm = () => {
    const [userPassword, setUserPassword] = useState('');
    const [password, setPassword] = useState('');
    const { userName } = useParams();
    const { logUser } = useContext(UserContext);

    useEffect(() => {
        const loggedUsers = JSON.parse(localStorage.getItem('loggedUsers'));
        const user = loggedUsers.find(user => user.userName === userName)
        setUserPassword(user.password);
    }, [])

    const updatePassword = (event) => {
        const { value } = event.target;
        setPassword(value);
    }

    const logIn = (event, user) => {
        event.preventDefault();
    }

    const isPasswordEqual = userPassword === password;

    return (
        <Modal>
            
        </Modal>
    )
}

export default LoginForm;