import AgeIndicator from "components/age-indicator";
import { IMAGE_BASE_URL } from "services/config";

export default
function Hero({ serie }) {
    console.log(1, serie);
    const releasedClass = serie.status === 'Released' ? 'released' : 'no-released';
    

    return (
        <header className="header">
            <img
                className="backdrop"
                src={`${IMAGE_BASE_URL}${serie.backdrop_path}`}
            />

            <img
                className="poster"
                src={`${IMAGE_BASE_URL}${serie.poster_path}`}
            />

            <div className="info-container">
                <h2>{serie.name}</h2>

                <div className="details-indicator">
                    <span>{serie.release_date}</span>
                    <span>{serie.original_language}</span>
                    <span className={releasedClass}>{serie.status}</span>
                    <AgeIndicator adult={serie.adult} />
                </div>

                <p>{serie.overview}</p>
            </div>
        </header>
    )
}