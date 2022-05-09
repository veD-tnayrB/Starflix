import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Sigh up component for routes
import SignUp from 'pages/signUp';

// Login components for routes
import LogIn from 'pages/LogIn';
import LoginForm from 'pages/LogIn/components/loginForm';
import UsersNotFound from 'pages/LogIn/components/usersNotFound'; // placeholder, i am working on it
                                                                                    // thinking
// Home
import Main from 'pages/main';
import Home from 'pages/main/pages/home';

// Movies
import Movies from 'pages/main/pages/movies';
import MovieDetails from 'pages/main/pages/details/pages/movieDetails';

// Series
import Series from 'pages/main/pages/series';
import SeriesDetails from 'pages/main/pages/details/pages/seriesDetails';

// People
import People from 'pages/main/pages/people';
import PersonDetails from 'pages/main/pages/details/pages/personDetails';

// Utilities
import ProtectedRoutes from 'components/protectedRoutes';

import './assets/scss/app.scss';


const App = () => {

    return (
        <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login/" element={<LogIn />}>
                    <Route path=":userName" element={<LoginForm />} />
                    <Route path="users-not-found" element={<UsersNotFound />} />
                </Route>

                {/* Home */}
                <Route element={<ProtectedRoutes />}>
                    <Route path="/" element={<Main />}>
                        <Route path="" element={<Home />} />

                        {/* Movies */}
                        <Route path="movies/" element={<Movies />} />
                        <Route path="movies/movie/:movieId" element={<MovieDetails />} />

                        {/* Series */}
                        <Route path="series" element={<Series />} />
                        <Route path="series/serie/:serieId" element={<SeriesDetails />} />

                        {/* People */}
                        <Route path="people/" element={<People />} />
                        <Route path="people/person/:personId" element={<PersonDetails />} />
                        
                        <Route path="/*" element={<Navigate to="/" />} />
                    </Route>
                </Route>
        </Routes>
    )
}

export default App;