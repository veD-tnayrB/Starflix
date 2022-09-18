import { useState, useEffect } from 'react';
import { getPopular } from 'services/movies';
import { ORIGINAL_IMAGE_BASE_URL } from 'services/config';
import AgeIndicator from 'components/age-indicator';
import Loading from 'components/loading';

import './hero.scss';
import { Link } from 'react-router-dom';

const DEFAULT_VALUE = {
    backdrop_path: '',
    release_date: '',
    adult: false
}

export default
    function Hero() {
    const [popularMovie, setPopularMovie] = useState(DEFAULT_VALUE);
    const [isLoading, setIsLoading] = useState(true);
    const backdropURL = `${ORIGINAL_IMAGE_BASE_URL}${popularMovie?.backdrop_path}`;
    const releaseYear = popularMovie?.release_date.split('-')[0];

    useEffect(() => {
        setIsLoading(true);

        getPopular()
            .then(response => {
                const firstMovie = response.results[0];
                setPopularMovie(firstMovie);
                setIsLoading(false);
            })
    }, [])

    if (isLoading) return <Loading />;

    return (
        <>
            <div className="movie-info-container">
                <Link
                    className="movie-link"
                    to={`/movies/movie/${popularMovie.id}`}
                >
                    <h2 className="title">{popularMovie?.title}</h2>
                </Link>
                <div className="details-section">
                    <span>{releaseYear}</span>
                    <span>{popularMovie?.original_language}</span>
                    <AgeIndicator adult={popularMovie?.adult} />
                </div>
                <p className="overview">{popularMovie?.overview}</p>
            </div>

            <img
                className="backdrop"
                alt={popularMovie?.title}
                src={backdropURL}
            />
        </>
    )
}