import AgeIndicator from "components/age-indicator";
import { IMAGE_BASE_URL } from "services/config";

export default
function Hero({ movie }) {

    return (
        <header className="header">

            <img
                className="backdrop"
                src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
            />

            <img
                className="poster"
                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            />

            <div className="info-container">
                <h2>
                    {movie.title}
                </h2>
                
                    <AgeIndicator adult={movie.adult} />

                <p>
                    {movie.overview}
                </p>
            </div>
        </header>
    )
}