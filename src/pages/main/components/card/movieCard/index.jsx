import { useNavigate } from 'react-router-dom';
import { apiImageURL } from 'services/api';

import '../card.scss';

const MovieCard = ({ className = 'card', movie }) => {
    const navigateTo = useNavigate();
    console.log(movie.poster)

    return (
        <li className="item-card">
            <button
             className={className}
             onClick={() => navigateTo(`/details/${movie.id}`)}
            >
                <div className="img-container">
                    <img
                     src={`${apiImageURL}${movie.poster}`}
                     alt={`${movie.title} poster`}
                     title={movie.title}
                    />
                </div>
                <span>{movie.title}</span>
            </button>
        </li>
    )
}

export default MovieCard;