import { useState } from "react";
import { Movie } from "components/media";
import List from "components/list";
import useFetch from "hooks/useFetch"
import routes from "routes/api";
import ShowMore from "components/show-more";

export default
function TopRatedMovies() {
    const [page, setPage] = useState(1);
    const [movies, setMovies, error, isLoading, refetch] = useFetch(`${routes.movies.getPopular}&page=${page}`, { results: [] }, loadMore);

    function loadMore(newMovies) {
        setMovies(currentMovies => ({...currentMovies, results: [...currentMovies?.results, ...newMovies.results]}))
    }

    const topRatedMovies = movies.results.map(movie => (
        <Movie 
         key={movie.id}
         movie={movie}
        />
    ))
        
    return (
        <section>
            <List  
             items={topRatedMovies}
             listTitle="Top Rated Movies"
             isLoading={isLoading}
             error={error}
             refetch={refetch}
            />
            <ShowMore setPage={setPage} />
        </section>
    )
}