import React, { useContext } from 'react';
import { UserContext } from '../contexts/userContext';

const useAuth = () => {
    const {currentUser} = useContext(UserContext);
    const isUserLogged = Object.keys(currentUser).every(prop => currentUser[prop] !== '');

    return isUserLogged;
}

export default useAuth;