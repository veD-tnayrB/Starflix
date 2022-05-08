import React, { useState, useEffect } from 'react';

import Hero from 'pages/main/components/hero';
import MovieCard from 'pages/main/components/card/movieCard';
import SerieCard from 'pages/main/components/card/serieCard';
import PersonCard from 'pages/main/components/card/personCard';
import Loading from 'pages/main/pages/loading';

import { getTrending as getTrendingMovies, getUpcoming as getUpcomingMovies } from 'services/api/movies';
import { getTrending as getTrendingSeries } from 'services/api/series';
import { getPopular as getPopularPeople } from 'services/api/people';

import './assets/scss/home.scss';


const Home = () => {
    const [mainMovie, setMainMovie] = useState({});
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingSeries, setTrendingSeries] = useState([]);
    const [popularPeople, setPopularPeople] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setIsLoading(true);

        Promise.all([getUpcomingMovies(signal), getTrendingMovies(signal), getTrendingSeries(signal), getPopularPeople(signal)])
        .then(results => {
            const [upcomingMoviesList, trendingMoviesList, trendingSeriesList, popularPeopleList] = results;

            setMainMovie(upcomingMoviesList[0]);
            setTrendingMovies(trendingMoviesList);
            setTrendingSeries(trendingSeriesList);
            setPopularPeople(popularPeopleList);

            setIsLoading(false);
        })

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

    if (isLoading) {
        return <Loading />;
    }


    return (
        <main className="home-page">
            <Hero item={mainMovie} />

            <section className="list-section">
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