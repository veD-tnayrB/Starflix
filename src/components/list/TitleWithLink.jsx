import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default
function TitleWithLink({ urlToBeRedirected, listTitle }) {

    return (
        <Link
            to={urlToBeRedirected}
            className="title-link"
        >
            <h3>{listTitle}</h3>
            <ArrowForwardIcon className="icon" />
        </Link>

    )

}