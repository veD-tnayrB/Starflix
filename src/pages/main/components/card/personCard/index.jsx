import { useNavigate } from 'react-router-dom';
import { apiImageURL } from 'services/api';

import '../card.scss';

const PersonCard = ({ className = 'card', person }) => {
    const navigateTo = useNavigate();

    return (
        <li className="item-card">
            <button
             className={className}
             onClick={() => navigateTo(`/details/${person.id}`)}
            >
                <div className="img-container">
                    <img
                     src={person.profile ? `${apiImageURL}${person.profile}` : ""}
                     alt={person.name}
                     title={person.name}
                    />
                </div>
                <span>{person.name}</span>
            </button>
        </li>
    )
}

export default PersonCard;