import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './limited-list.scss';
function LimitedList({ items, listTitle, urlToBeRedirected, isLoading, error, refetch }) {
    const navigateTo = useNavigate();

    function redirectTo() {
        navigateTo(urlToBeRedirected);
    }

    return (
        <div className="limited-list-container">
            <h3>{listTitle}</h3>
            <ul className="limited-list">
                {items}

                <li className="more-button-item">
                    <button 
                     className="more-button" 
                     onClick={redirectTo}
                    >
                        <ArrowForwardIcon className="icon"/>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default LimitedList;