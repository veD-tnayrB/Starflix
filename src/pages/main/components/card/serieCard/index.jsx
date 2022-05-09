import { useNavigate } from 'react-router-dom';
import { apiImageURL } from 'services/api';

import '../card.scss';

const SerieCard = ({ className = 'card', serie }) => {
    const navigateTo = useNavigate();

    return (
        <li className="item-card">
            <button
             className={className}
             onClick={() => navigateTo(`/series/serie/${serie.id}`)}
            >
                <div className="img-container">
                    <img
                     src={serie.poster ? `${apiImageURL}${serie.poster}` : ""}
                     alt={`${serie.name} poster`}
                     title={serie.name}
                    />
                </div>
                <span>{serie.name}</span>
            </button>
        </li>
    )
}

export default SerieCard;