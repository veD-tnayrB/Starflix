export default
function Error({ refetch }) {
    console.log(refetch);

    return (
        <div>
            <h3>Error</h3>
            <button onClick={refetch}>
                Reload
            </button>
        </div>
    )
}