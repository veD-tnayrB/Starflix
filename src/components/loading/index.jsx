import LoadingIcon from "./LoadingIcon";
import './loading.scss';

export default
function Loading() {

    return (
        <div className="loading">
            <span>Loading...</span>
            <LoadingIcon />
        </div>
    )
}