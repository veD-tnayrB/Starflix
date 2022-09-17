import AgeIndicator from "components/age-indicator";
import { IMAGE_BASE_URL } from "services/config";

export default
function Hero({ movie }) {
    const releasedClass = movie.status === 'Released' ? 'released' : 'no-released';

    return (
        <header className="header">
            <img
                className="backdrop"
                src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
                alt={movie.title}
            />

            <img
                className="poster"
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                alt={movie.title}
            />

            <div className="info-container">
                <h2>{movie.title}</h2>

                <div className="details-indicator">
                    <span>{movie.release_date}</span>
                    <span>{movie.original_language}</span>
                    <span className={releasedClass}>{movie.status}</span>
                    <AgeIndicator adult={movie.adult} />
                </div>

                <p>{movie.overview}</p>
            </div>
        </header>
    )
}