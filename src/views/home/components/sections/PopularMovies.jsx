import { Movie } from "components/media";
import useFetch from "hooks/useFetch";
import routes from "routes/api";
import LimitedList from "../limited-list";

export default
function PopularMovies() {
    const [popularMovies, moviesError, isMovieLoading, refetchMovies] = useFetch(routes.movies.getPopular, { results: [] });
    const popularMoviesItems = popularMovies.results.map(movie => <Movie key={movie.id} movie={movie} />)

    return (
        <LimitedList
            listTitle="Popular Movies"
            items={popularMoviesItems}
            urlToBeRedirected="/"
            isLoading={isMovieLoading}
            error={moviesError}
            refetch={refetchMovies}
        />
    )
}