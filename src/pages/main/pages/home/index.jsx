import React, { useState, useEffect } from 'react';

import Hero from 'pages/main/components/hero';
import MovieCard from 'pages/main/components/card/movieCard';
import SerieCard from 'pages/main/components/card/serieCard';
import PersonCard from 'pages/main/components/card/personCard';

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
        const controller = new AbortController();
        const signal = controller.signal;

        // Movies
        getUpcomingMovies(signal)
        .then(upcomingMoviesList => {
            setMainMovie(upcomingMoviesList[0])
        })

        getTrendingMovies(signal)
        .then(trendingMovies => setTrendingMovies(trendingMovies));

        // Series
        getTrendingSeries(signal)
        .then(trendingSeries => setTrendingSeries(trendingSeries));

        // People
        getPopularPeople(signal)
        .then(popularPeople => setPopularPeople(popularPeople));
        
        return () => {
            controller.abort()
        }
    }, []);

    const trendingMoviesElements = trendingMovies.map(movie => (
        <MovieCard
         key={movie.id}
         movie={movie}
        />
    ))

    const trendingSeriesElements = trendingSeries.map(serie => (
        <SerieCard 
         key={serie.id}
         serie={serie}
        />
    ))

    const popularPeopleElements = popularPeople.map(person => (
        <PersonCard 
         key={person.id}
         person={person}
        />
    ))


    return (
        <main className="home-page">
            <Hero item={mainMovie} />

            <section>
                <ul>
                    <li>
                        <h3>Trending Movies</h3>
                        <ol>
                            {trendingMoviesElements}
                        </ol>
                    </li>

                    <li>
                        <h3>Trending Series</h3>
                        <ol>
                            {trendingSeriesElements}
                        </ol>
                    </li>

                    <li>
                        <h3>Popular People</h3>
                        <ol>
                            {popularPeopleElements}
                        </ol>
                    </li>
                </ul>
            </section>
        </main>
    )
}

export default Home;