import AgeIndicator from "components/age-indicator";
import { NORMAL_IMAGE_BASE_URL, ORIGINAL_IMAGE_BASE_URL } from "services/config";

export default
function Hero({ serie }) {
    const releasedClass = serie.status === 'Released' ? 'released' : 'no-released';
    

    return (
        <header className="header">
            <img
                className="backdrop"
                src={`${ORIGINAL_IMAGE_BASE_URL}${serie.backdrop_path}`}
                alt={serie.name}
            />

            <img
                className="poster"
                src={`${NORMAL_IMAGE_BASE_URL}${serie.poster_path}`}
                alt={serie.name}
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