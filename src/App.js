import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './assets/scss/app.scss';

import Home from './pages/home';
import SignUp from './pages/signUp';
import LogIn from './pages/LogIn';
import LoginForm from './pages/LogIn/components/loginForm';

import ProtectedRoutes from './components/ProtectedRoutes';

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/log-in/" element={<LogIn />}>
                <Route path=":userName" element={<LoginForm />} />
            </Route>
            <Route element={<ProtectedRoutes />} >
                <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
    )
}

export default App;