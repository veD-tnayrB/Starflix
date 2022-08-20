import AdultIndicator from 'components/adult-indicator';
import FriendlyIndicator from 'components/friendy-indicator';
import Loading from 'components/loading';
import useFetch from 'hooks/useFetch';
import routes, { IMAGE_BASE_URL } from 'routes/api';

import './hero.scss';

function Hero() {
    const [popularMovies,, theresAnError, isLoading, refetch ] = useFetch(routes.movies.getPopular, {results: []});
    const popularMovie = popularMovies?.results[2];
    const backdropURL = `${IMAGE_BASE_URL}${popularMovie?.backdrop_path}`;
    const releaseYear = popularMovie?.release_date.split('-')[0];
    const ageIcon = popularMovie?.adult ? <AdultIndicator /> : <FriendlyIndicator />;

    if (theresAnError) {
        return <div>{theresAnError}</div>
    }

    if (isLoading) return <Loading />;

    return (
        <section className="hero-section">
            <div className="movie-info-container">
                <h2 className="title">{popularMovie.title}</h2>
                <div className="details-section">
                    <span>{releaseYear}</span>
                    <span>{popularMovie.original_language}</span>
                    {ageIcon}
                </div>
                <p className="overview">{popularMovie.overview}</p>
            </div>

            <img 
             className="backdrop"
             alt={popularMovie.title}
             src={backdropURL} 
            />
        </section>
    )
}

export default Hero;