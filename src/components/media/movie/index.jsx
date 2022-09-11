import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from 'services/config';

import '../media.scss';

export
function Movie(props) {

    return (
        <li className="media-item">
            <div className="media">
                <Link to={`/movies/movie/${props.id}`}>
                        <img 
                            className="media-image"
                            src={`${IMAGE_BASE_URL}${props.poster_path}`} 
                            alt={props.title}
                            loading="lazy"
                        />
                    <div className="media-info">
                        {props.title}
                    </div>
                </Link>
            </div>
        </li>
    )
}