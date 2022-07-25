import { NavLink } from "react-router-dom";

import './link.scss';

function Link({ route, name }) {

    return (
        <li>
            <NavLink className="link" to={route}>
                {name}
            </NavLink>
        </li>
    )
}

export default Link;