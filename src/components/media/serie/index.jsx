import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from 'routes/api';

import '../media.scss';

export
function Serie({ serie }) {
    console.log(serie)

    return (
        <li className="media-item">
            <div className="media">
                <Link to="">
                    <img 
                     className="media-image" 
                     src={`${IMAGE_BASE_URL}${serie.poster_path}`} 
                    />

                    <div className="media-info">
                        {serie.name}
                    </div>
                </Link>
            </div>
        </li>
    )
}