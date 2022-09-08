import SearchIcon from '@mui/icons-material/Search';
import LoadingIcon from 'components/loading/LoadingIcon';

export default
function SearchButton({ isLoading }) {

    const icon = isLoading ? <LoadingIcon /> : <SearchIcon />;

    return (
        <button>
            {icon}
        </button>
    )
}