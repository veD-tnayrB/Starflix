import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { UsersProvider } from 'contexts/users/usersContext';
import { LoggedUserProvider } from 'contexts/loggedUser/loggedUserContext';
import App from './App';


ReactDOM.render(
    <BrowserRouter>
        <UsersProvider>
            <LoggedUserProvider>
                <App />
            </LoggedUserProvider>
        </UsersProvider>
    </BrowserRouter>,
    document.getElementById('root'));