import * as React from 'react';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './limited-list.scss';
function LimitedList({ items, listTitle, urlToBeRedirected, isLoading, error, refetch }) {

    return (
        <div className="limited-list-container">
                <div className="title-container">
                    <Link 
                     to={urlToBeRedirected}
                     className="title-link"
                    >
                        <h3>{listTitle}</h3>
                        <ArrowForwardIcon className="icon"/>
                    </Link>
                </div>
            
            
            <ul className="limited-list">
                {items}
            </ul>
        </div>
    )
}

export default LimitedList;