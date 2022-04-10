import React, { useState, useEffect } from 'react';

import Hero from 'pages/main/components/hero';
import Card from 'pages/main/components/card';

import { getTrending as getTrendingMovies, getUpcoming as getUpcomingMovies } from 'services/api/movies';
import { getTrending as getTrendingSeries, getTopRated as getTopRatedSeries } from 'services/api/series';

import './assets/scss/home.scss';

const Home = () => {
    const [mainMovie, setMainMovie] = useState({});
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [trendingSeries, setTrendingSeries] = useState([]);
    const [topRatedSeries, setTopRatedSeries] = useState([]);
    
    useEffect(() => {
        const getData = async () => {
            // Movies
            const upcomingMovies = await getUpcomingMovies();

            setMainMovie(upcomingMovies[0]);
            setUpcomingMovies(upcomingMovies);
            setTrendingMovies(await getTrendingMovies());

            // Series
            setTrendingSeries(await getTrendingSeries());
            setTopRatedSeries(await getTopRatedSeries());
        }

        getData();
    }, []);

    const trendingMoviesList = trendingMovies.map(trendingMovie => (
        <Card 
         key={trendingMovie.id}
         item={trendingMovie} 
        />
    ))

    const trendingSeriesList = trendingSeries.map(trendingSerie => (
        <Card 
         key={trendingSerie.id}
         item={trendingSerie} 
        />
    ))

    const upcomingMoviesList = upcomingMovies.map(upcomingMovie => (
        <Card
         key={upcomingMovie.id}
         item={upcomingMovie}
        />
    ))

    const topRatedSeriesList = topRatedSeries.map(ratedSerie => (
        <Card
         key={ratedSerie.id}
         item={ratedSerie}
        />
    ))

    return (
        <main className="home-page">
            <Hero item={mainMovie} />

            <section>
                <h3 className="section-title">Trending Movies</h3>
                <ol>
                    {trendingMoviesList}
                </ol>

                <h3 className="section-title">Trending Series</h3>
                <ol>
                    {trendingSeriesList}
                </ol>

                <h3 className="section-title">Upcoming Movies</h3>
                <ol>
                    {upcomingMoviesList}
                </ol>

                <h3 className="section-title">Top Rated Series</h3>
                <ol>
                    {topRatedSeriesList}
                </ol>
            </section>
        </main>
    )
}

export default Home;