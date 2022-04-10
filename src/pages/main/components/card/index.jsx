import React from 'react';
import { useNavigate } from 'react-router-dom';
import { apiImageURL } from 'services/api';

import './card.scss';

const Card = ({ className = 'card', item }) => {
    const navigateTo = useNavigate();

    return (
        <li className="item-card">
            <button 
             className={className}
             onClick={() => navigateTo(`/details/${item.id}`)}
            >
                <div className="img-container">
                    <img 
                     src={`${apiImageURL}${item.poster}`}
                     alt={`${item.title} poster`}
                     title={item.title}
                    />
                </div>
                <span>{item.title}</span>
            </button>
        </li>
    )
}

export default Card;