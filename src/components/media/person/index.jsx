import { Link } from 'react-router-dom';
import { Defer, Img } from 'react-progressive-loader'
import { IMAGE_BASE_URL } from 'routes/api';

import '../media.scss';

export
function Person({ person }) {

    return (
        <li className="media-item">
            <div className="media">
                <Link to="">
                    <Defer
                        render={() =>
                        <img
                            className="media-image"
                            src={`${IMAGE_BASE_URL}${person.profile_path}`}
                            alt={person.name}
                        />
                        }
                        >
                    </Defer>

                    <div className="media-info">
                        {person.name}
                    </div>
                </Link>
            </div>
        </li>
    )
}