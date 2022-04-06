import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

import { UserContext } from 'contexts/userContext';

import './navbar.scss';

const Navbar = () => {
    const { currentUser } = useContext(UserContext);
    const [isUserOptionsOpen, setIsUserOptionsOpen] = useState(false);

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
                                    to="movie">
                                    Movies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="options"
                                    to="tv">
                                    TV
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="options"
                                    to="person">
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

                                            <button>
                                                <PersonIcon className="icon" />
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