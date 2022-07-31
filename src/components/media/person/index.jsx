import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from 'routes/api';

import '../media.scss';

export
function Person({ person }) {

    return (
        <li className="media-item">
            <div className="media">
                <Link to="">
                    <img 
                     className="media-image" 
                     src={`${IMAGE_BASE_URL}${person.profile_path}`} 
                    />
                </Link>
            </div>
        </li>
    )
}