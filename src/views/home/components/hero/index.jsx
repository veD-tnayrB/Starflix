import { useState, useEffect } from 'react';
import { getPopular } from 'services/movies';
import { IMAGE_BASE_URL } from 'services/config';
import AgeIndicator from 'components/age-indicator';
import Loading from 'components/loading';

import './hero.scss';

const DEFAULT_VALUE = {
    backdrop_path: '',
    release_date: '',
    adult: false
}

export default
function Hero() {
    const [popularMovie, setPopularMovie] = useState(DEFAULT_VALUE);
    const [isLoading, setIsLoading] = useState(true);
    const backdropURL = `${IMAGE_BASE_URL}${popularMovie?.backdrop_path}`;
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
                <h2 className="title">{popularMovie?.title}</h2>
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