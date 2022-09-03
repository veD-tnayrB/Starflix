import MainContextProvider from 'contexts/main';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';


ReactDOM.render(
    <MainContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </MainContextProvider>,
document.getElementById('root'));