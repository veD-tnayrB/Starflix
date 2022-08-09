import loadingIcon from './assets/loading.svg';

export default
function LoadingIcon() {

    return (
        <img 
         src={loadingIcon}
         alt="Loading"
         title="Loading..."
         className="loading-icon"
        />
    )
}