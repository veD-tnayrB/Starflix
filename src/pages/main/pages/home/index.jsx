import React, { useState, useEffect } from 'react';

import Hero from 'pages/main/components/hero';
import List from 'pages/main/components/list';

import { getTrending as getTrendingMovies, getUpcoming as getUpcomingMovies } from 'services/api/movies';
import { getTrending as getTrendingSeries } from 'services/api/series';
import { getPopular as getPopularPeople } from 'services/api/people';

import './assets/scss/home.scss';

const Home = () => {
    const [mainMovie, setMainMovie] = useState({});
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingSeries, setTrendingSeries] = useState([]);
    const [popularPeople, setPopularPeople] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            // Movies
            const upcomingMovies = await getUpcomingMovies();

            setMainMovie(upcomingMovies[0]);
            setTrendingMovies(await getTrendingMovies());

            // Series
            setTrendingSeries(await getTrendingSeries());

            // People
            setPopularPeople(await getPopularPeople());
        }

        getData();
    }, []);

    return (
        <main className="home-page">
            <Hero item={mainMovie} />

            <section>
                <List
                 listName="Trending Movies" 
                 items={trendingMovies}
                />

                <List
                 listName="Trending Series" 
                 items={trendingSeries}
                />

                <List
                 listName="Popular People"
                 items={popularPeople}
                />
            </section>
        </main>
    )
}

export default Home;