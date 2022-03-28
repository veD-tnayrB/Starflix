import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateSessionID } from '../services/api/';
import { registerUser } from '../services/users';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const navigateTo = useNavigate();
    const [currentUser, setCurrentUser] = useState({
        username: '',
        password: '',
        sessionID: ''
    });

    useEffect(() => {
        //const logedUsers = localStorage.getItem('logedUsers');
        //localStorage.setItem('logedUsers', JSON.stringify([...logedUsers, currentUser]));
        console.log(currentUser)
    }, [currentUser])
    
    // You got to fix this down below, i mean, the localStorage must be fixed

    const signUp = async (name, lastName, userName, password) => {
        const getUserID = '12313123123'; //await generateSessionID();
        registerUser(name, lastName, userName, password, getUserID());
    }

    const logUser = (username, password) => {
        const logedUsers = JSON.parse(localStorage.getItem('logedUsers'));
        const user = logedUsers.find(user => user.username === username && user.password === password);
        const userIndex = logedUsers.indexOf(user);

        if (user) {
            setCurrentUser({
                username: username,
                password: password,
                sessionID: logedUsers[userIndex].sessionID
            })

            navigateTo('/home');
        }
    }

    const logout = () => {
        setCurrentUser({
            username: '',
            password: '',
            sessionID: ''
        })
    }


    return (
        <UserContext.Provider value={{currentUser, signUp, logUser, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider, UserContext };