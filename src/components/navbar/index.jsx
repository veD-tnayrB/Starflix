import Link from 'components/link';
import Logo from 'components/logo';
import routes from "routes/client";

import './navbar.scss';

function Navbar() {
    const routesArray = Object.values(routes);
    const links = routesArray.map(route => (
        <Link
            key={route.name}
            {...route}
        />
    ))

    return (
        <header>
            <nav className="navbar">
                <ul>
                    <div className="logo-container">
                        <li>
                            <Logo />
                        </li>
                    </div>
                    <div className="links-container">
                        {links}
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;