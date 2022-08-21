import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LoadingIcon from 'components/loading/LoadingIcon';

import './showMore.scss';

export default
function ShowMore({ setPage, isLoading }) {

    function showMore() {
        setPage(currentPage => currentPage + 1);
    }

    const icon = isLoading ? <LoadingIcon /> : <ChevronRightIcon className="icon" />;

    return (
        <button 
         className="show-more-button"
         onClick={showMore} 
        >
            {icon}
        </button>
    )
}