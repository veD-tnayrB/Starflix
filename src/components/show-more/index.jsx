import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './showMore.scss';

export default
function ShowMore({ setPage }) {

    function showMore() {
        setPage(currentPage => currentPage + 1);
    }

    return (
        <button 
         className="show-more-button"
         onClick={showMore} 
        >
            <ArrowDropDownIcon 
             className="icon" 
            />
        </button>
    )
}