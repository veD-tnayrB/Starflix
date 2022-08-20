import { Defer, Img } from 'react-progressive-loader'
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from 'routes/api';

import '../media.scss';

export
function Serie({ serie }) {

    return (
        <li className="media-item">
            <div className="media">
                <Link to="">
                    <Defer
                        render={() =>
                        <img 
                            className="media-image" 
                            src={`${IMAGE_BASE_URL}${serie.poster_path}`} 
                            alt={serie.name}
                        />
                    }
                    ></Defer>
                    

                    <div className="media-info">
                        {serie.name}
                    </div>
                </Link>
            </div>
        </li>
    )
}