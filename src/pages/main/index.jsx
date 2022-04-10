import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from 'pages/main/components/navbar';
import Footer from 'pages/main/components/footer';

import './assets/scss/main.scss';

const Main = () => {
    
    return (
        <>
            <Navbar />
            <div className="body">
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Main;