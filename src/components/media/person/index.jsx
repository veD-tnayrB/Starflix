import { Link } from 'react-router-dom';
import { NORMAL_IMAGE_BASE_URL } from 'services/config';

import '../media.scss';

export
function Person(props) {

    return (
        <li className="media-item">
            <div className="media">
                <Link to={`/people/person/${props.id}`}>
                        <img
                            className="media-image"
                            src={`${NORMAL_IMAGE_BASE_URL}${props.profile_path}`}
                            alt={props.name}
                            loading="lazy"
                        />
                    <div className="media-info">
                        <p className="name">{props.name}</p>
                        <p className="charge">{props.known_for_department}</p>
                    </div>
                </Link>
            </div>
        </li>
    )
}