import { Link } from "react-router-dom";
import { Defer, Img } from 'react-progressive-loader'
import { IMAGE_BASE_URL } from "routes/api";

import '../media.scss';

export
function Movie({ movie }) {

    return (
        <li className="media-item">
            <div className="media">
                <Link to="">
                    <Defer
                        render={() =>
                        <img 
                            className="media-image"
                            src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
                            alt={movie.title}
                        />
                        }
                    >
                    </Defer>

                    <div className="media-info">
                        {movie.title}
                    </div>
                </Link>
            </div>
        </li>
    )
}