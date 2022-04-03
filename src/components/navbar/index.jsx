import React from 'react';
import { NavLink } from 'react-router-dom';

import MovieFilterIcon from '@mui/icons-material/MovieFilter';

const Navbar = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <MovieFilterIcon className="logo-icon"/>
                        <span className="logo-text">Starflix</span>
                    </li>

                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="movies">Movies</NavLink>
                    </li>
                    <li>
                        <NavLink to="tv">TV</NavLink>
                    </li>
                    <li>
                        <NavLink to="person">People</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;