import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import UserCard from './components/userCard';

import { getAllUsers } from '../../services/users';
import './assets/scss/login.scss';

const LogIn = () => {
    const [loggedUsersList, setLoggedUsersList] = useState([]);
    const navigateTo = useNavigate();

    useEffect(() => {
        setLoggedUsersList(getAllUsers());
    }, [])

    const usersElements = loggedUsersList.map(user => (
        <UserCard 
         key={user.id}
         userData={user}
        />
    ))

    return (
        <main className="log-in-page">
            <div className="action-container">
                <ol className="user-list">
                    {usersElements}
                </ol> 

                <button 
                 className="secondary-button"
                 onClick={() => navigateTo("/")}
                >
                    Sign Up
                </button>
            </div>
            <Outlet />
        </main>
    )
}

export default LogIn;