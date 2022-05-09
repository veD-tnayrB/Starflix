import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Header from 'pages/main/pages/details/components/header';
import Loading from 'pages/main/pages/loading'

import { getDetails } from 'services/api/movies';

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { movieId } = useParams();


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getDetails(movieId, signal)
        .then(details => {
            setMovieDetails(details);
            setIsLoading(false);
        })

        return () => {
            controller.abort();
        }
    }, [movieId])

    
    if (isLoading) {
        return <Loading />;
    }


    return (
        <main>
            <Header
             poster={movieDetails.poster}
             backdrop={movieDetails.backdrop}
             title={movieDetails.title} 
            />

            Esto es Movie Details
        </main>
    )
}

export default MovieDetails;