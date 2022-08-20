import RefreshIcon from '@mui/icons-material/Refresh';
import './loading.scss';

export default
function Loading() {

    return (
        <div className="loading">
            <span>Loading...</span>
            <RefreshIcon className="loading-icon" />
        </div>
    )
}