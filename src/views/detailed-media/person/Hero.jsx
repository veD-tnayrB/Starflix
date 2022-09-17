import { IMAGE_BASE_URL } from "services/config"

export default
function Hero({ person }) {
    const isDead = person.deathday;
    const deadMessage = isDead ? 'Dead' : 'Alive';
    const deadClass = isDead ? 'dead' : 'alive';
    const gender = person.gender === 1 ? 'Female' : 'Male';

    return (
        <header className="header">
            <img
                className="poster"
                src={`${IMAGE_BASE_URL}${person.profile_path}`}
            />

            <div className="info-container">
                <h2>{person.name}</h2>

                <div className="details-indicator">
                    <span>{person.known_for_department}</span>
                    <span>{person.birthday}</span>
                    <span className={deadClass}>{deadMessage}</span>
                    <span>{gender}</span>
                </div>

                <p>{person.biography}</p>
            </div>
        </header>
    )
}