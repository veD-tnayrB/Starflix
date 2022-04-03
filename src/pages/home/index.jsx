import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from 'components/navbar';

import { getPopular } from 'services/api';

const Home = () => {
    const navigateTo = useNavigate();
    // This is temporal :D
    useEffect(() => {
        getPopular('person');
    }, [])

    return (
        <>
            <Navbar />
            <h1>This is home!</h1>
            <button onClick={() => navigateTo('/qwewqewewe')}>Go Sign Up Page</button>
        </>
    )
}

export default Home;