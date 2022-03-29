import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import UserCard from './components/UserCard';
import Form from './components/LoginForm';

import './assets/scss/login.scss';

// This is something temporal :D
const data = [
    {
        name: "Bryant",
        lastName: "Caballero",
        userName: "BryantDev_",
        password: "**********",
        id: "asdasdasd8a98789"
    },
    {
        name: "Alan",
        lastName: "Caballero",
        userName: "Alan_",
        password: "**********",
        id: "a15s1d5a4dsad45asd14"
    },
    {
        name: "Mishell",
        lastName: "Caballero",
        userName: "Mishell_",
        password: "**********",
        id: "a15s1ddsasd14"
    },
    {
        name: "Carlos",
        lastName: "Caballero",
        userName: "Carlos_",
        password: "**********",
        id: "a15s1d45asasds14"
    }
]

const LogIn = () => {
    const [registeredUsers, setRegisteredUsers] = useState([]);

    // Here this should get the data from indexedDB
    useEffect(() => {
        setRegisteredUsers(data);
    }, [])

    const usersElements = registeredUsers.map(user => (
        <UserCard 
         key={user.id}
         user={user}
        />
    ))

    return (
        <main className="log-in-page">
            <div className="action-container">
                <ol className="user-list">
                    {usersElements}
                </ol> 

                <button 
                 className="back-button"
                 onClick={() => useNavigate("/")}
                >
                    Sign Up
                </button>
            </div>
        </main>
    )
}

export default LogIn;