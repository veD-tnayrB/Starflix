const { Link } = require("react-router-dom");

export default
function Route({ name, link }) {
    return (
        <li>
            <Link to={link}>
                <span>{name}</span>
            </Link>
        </li>
    )
}