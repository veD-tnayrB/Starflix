import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from 'services/config';

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
                            alt={person.name}
                        />
                    <div className="media-info">
                        {person.name}
                    </div>
                </Link>
            </div>
        </li>
    )
}