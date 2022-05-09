import { useNavigate } from 'react-router-dom';
import { apiImageURL } from 'services/api';

import '../card.scss';

const MovieCard = ({ className = 'card', movie }) => {
    const navigateTo = useNavigate();
    
    return (
        <li className="item-card">
            <button
             className={className}
             onClick={() => navigateTo(`/movies/movie/${movie.id}`)}
            >
                <div className="img-container">
                    <img
                     src={movie.poster ? `${apiImageURL}${movie.poster}` : ""}
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