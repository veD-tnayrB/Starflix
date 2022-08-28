import TMDBLogo from "./TMDBLogo"

export default
function ApiCredits() {

    return (
        <div className="tmdb-credits">
            <TMDBLogo />
            <p className="credits">
                The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.
            </p>
        </div>
    )
}