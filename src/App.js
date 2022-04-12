import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Sigh up component for routes
import SignUp from 'pages/signUp';

// Login components for routes
import LogIn from 'pages/LogIn';
import LoginForm from 'pages/LogIn/components/loginForm';
import UsersNotFound from 'pages/LogIn/components/usersNotFound';

// Main components for routes
import ProtectedRoutes from 'components/protectedRoutes';
import Main from 'pages/main';
import Home from 'pages/main/pages/home';
import Movies from 'pages/main/pages/movies';
import Series from 'pages/main/pages/series';
import People from 'pages/main/pages/people';

import './assets/scss/app.scss';

const App = () => {

    return (
        <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login/" element={<LogIn />}>
                    <Route path=":userName" element={<LoginForm />} />
                    <Route path="users-not-found" element={<UsersNotFound />} />
                </Route>

                <Route element={<ProtectedRoutes />}>
                    <Route path="/" element={<Main />}>
                        <Route path="" element={<Home />} />
                        <Route path="movies" element={<Movies />} />
                        <Route path="series" element={<Series />} />
                        <Route path="people" element={<People />} />
                        <Route path="/*" element={<Navigate to="/" />} />
                        
                    </Route>
                </Route>
        </Routes>
    )
}

export default App;