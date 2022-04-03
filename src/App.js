import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ProtectedRoutes from './components/protectedRoutes';
import Home from './pages/home';
import SignUp from './pages/signUp';

import LogIn from './pages/LogIn';
import LoginForm from './pages/LogIn/components/loginForm';
import UsersNotFound from './pages/LogIn/components/usersNotFound';

import './assets/scss/app.scss';


const App = () => {

    return (
        <Routes>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login/" element={<LogIn />}>
                    <Route path=":userName" element={<LoginForm />} />
                    <Route path="users-not-found" element={<UsersNotFound />} />
                </Route>
                <Route path="/*" element={<Navigate to="/signup" />} />
                


                <Route element={<ProtectedRoutes />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/*" element={<Navigate to="/home" />} />
                </Route>
        </Routes>
    )
}

export default App;