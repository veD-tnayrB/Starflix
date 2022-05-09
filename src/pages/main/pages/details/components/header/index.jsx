import { apiImageURL } from 'services/api';


const Header = ({ poster, backdrop, title }) => {
    const headerStyles = {
        background: `url(${apiImageURL}${backdrop}) center no-repeat`
    }

    return (
        <header style={headerStyles}>
            <div></div>
            <img
             src={`${apiImageURL}${poster}`}
            />

            <h2>{title}</h2>
        </header>
    )
}

export default Header;