import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigateTo = useNavigate();
    // This is temporal :D

    return (
        <>
            <h1>This is home!</h1>
            <button onClick={() => navigateTo('/qwewqewewe')}>Go Sign Up Page</button>
        </>
    )
}

export default Home;