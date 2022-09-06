import { Link } from "react-router-dom";
import { IMAGE_BASE_URL } from 'services/config';

import '../media.scss';

export
function Movie({ movie }) {

    return (
        <li className="media-item">
            <div className="media">
                <Link to="">
                        <img 
                            className="media-image"
                            src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
                            alt={movie.title}
                            loading="lazy"
                        />
                    <div className="media-info">
                        {movie.title}
                    </div>
                </Link>
            </div>
        </li>
    )
}