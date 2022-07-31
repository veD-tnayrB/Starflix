import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from 'routes/api';

import '../media.scss';

export
function Serie({ serie }) {

    return (
        <li className="media-item">
            <div className="media">
                <Link to="">
                    <img 
                     className="media-image" 
                     src={`${IMAGE_BASE_URL}${serie.poster_path}`} 
                    />
                </Link>
            </div>
        </li>
    )
}