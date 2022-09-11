import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from 'services/config';

import '../media.scss';

export
function Person(props) {

    return (
        <li className="media-item">
            <div className="media">
                <Link to={`/people/person/${props.id}`}>
                        <img
                            className="media-image"
                            src={`${IMAGE_BASE_URL}${props.profile_path}`}
                            alt={props.name}
                            loading="lazy"
                        />
                    <div className="media-info">
                        {props.name}
                    </div>
                </Link>
            </div>
        </li>
    )
}