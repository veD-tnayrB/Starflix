import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiImageURL } from 'services/api';
import { getTrending, getPopular, getUpcoming } from 'services/api/movies';

import Navbar from 'components/navbar';

const Home = () => {
    const [mainMovie, setMainMovie] = useState({});
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setTrendingMovies(await getTrending());
            setMainMovie(await getTrending()[0]);
            setPopularMovies(await getPopular());
            setUpcomingMovies(await getUpcoming());
        }

        getData();
    }, []);

    const trendingList = trendingMovies.map(trendingMovie => (
        <li key={trendingMovie.id}>
            <img src={`${apiImageURL}${trendingMovie.poster}`} />
        </li>
    ))

    const popularList = popularMovies.map(popularMovie => (
        <li key={popularMovie.id}>
            <img src={`${apiImageURL}${popularMovie.poster}`} />
        </li>
    ))

    const upcomingList = upcomingMovies.map(upcomingMovie => (
        <li key={upcomingMovie.id}>
            <img src={`${apiImageURL}${upcomingMovie.poster}`} />
        </li>
    ))



    return (
        <>
            <Navbar />
            <main>
                <h2>Trending Movies</h2>
                <ul>{trendingList}</ul>

                <h2>Popular Movies</h2>
                <ul>{popularList}</ul>

                <h2>Upcoming Movies</h2>
                <ul>{upcomingList}</ul>
            </main>
            {/* Footer */}
        </>
    )
}

export default Home;