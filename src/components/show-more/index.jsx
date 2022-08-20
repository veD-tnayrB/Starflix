import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LoadingIcon from 'components/loading/LoadingIcon';

import './showMore.scss';

export default
function ShowMore({ setPage, isLoading }) {

    function showMore() {
        setPage(currentPage => currentPage + 1);
    }

    const icon = isLoading ? <LoadingIcon /> : <ArrowDropDownIcon className="icon" />;

    return (
        <button 
         className="show-more-button"
         onClick={showMore} 
        >
            {icon}
        </button>
    )
}