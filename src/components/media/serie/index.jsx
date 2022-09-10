import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from 'services/config';

import '../media.scss';

export
function Serie(props) {

    return (
        <li className="media-item">
            <div className="media">
                <Link to="">
                        <img 
                            className="media-image" 
                            src={`${IMAGE_BASE_URL}${props.poster_path}`} 
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