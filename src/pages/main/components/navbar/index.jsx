import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

import { UserContext } from 'contexts/userContext';

import './navbar.scss';

const Navbar = () => {
    const { currentUser, logout } = useContext(UserContext);
    const [isUserOptionsOpen, setIsUserOptionsOpen] = useState(false);
    const navigateTo = useNavigate();

    const handleLogout = () => {
        logout();
        navigateTo('/signup')
    }

    return (
        <header className="main-header">
            <nav>
                <ul>
                    <li className="logo-container">
                        <MovieFilterIcon className="logo-icon"/>
                        <span className="logo-text">Starflix</span>
                    </li>

                    <li className="options-container">
                        <ul>
                            <li>
                                <NavLink
                                    className="options"
                                    to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="options"
                                    to="movies">
                                    Movies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="options"
                                    to="series">
                                    Series
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="options"
                                    to="people">
                                    People
                                </NavLink>
                            </li>
                            <li>
                                <div className="user-options-container">
                                    <button 
                                     className="user-img-container"
                                     onClick={() => setIsUserOptionsOpen(!isUserOptionsOpen)}
                                    >
                                        <img
                                         className="user-img"
                                         src={currentUser.img}
                                         alt="user"
                                        />
                                    </button>

                                    {
                                        isUserOptionsOpen && 
                                        <div className="user-options">
                                            <h2>{currentUser.userName}</h2>
                                            <button>
                                                <SettingsIcon className="icon" />
                                                Settings
                                            </button>

                                            <button onClick={handleLogout}>
                                                <LogoutRoundedIcon className="icon" />
                                                Log out
                                            </button>
                                        </div>
                                    }
                                    
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;