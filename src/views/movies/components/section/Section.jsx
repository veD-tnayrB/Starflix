import { useState } from "react";
import List from "components/list";
import { Movie } from "components/media";
import ShowMore from "components/show-more";
import useFetch from "hooks/useFetch";


export default
function Section({ url, sectionTitle }) {
    const [page, setPage] = useState(1);
    const [movies, setMovies, error, isLoading, refetch] = useFetch(`${url}&page=${page}`, { results: [] }, loadMore);

    function loadMore(newMovies) {
        setMovies(currentMovies => (
            {...currentMovies, results: [...currentMovies?.results, ...newMovies.results]}
        ))
    }

    const topRatedMovies = movies.results.map(movie => (
        <Movie
         key={movie.id}
         movie={movie}
        />
    ));
        
    return (
        <section>
            <List
             items={topRatedMovies}
             listTitle={sectionTitle}
             isLoading={isLoading}
             error={error}
             refetch={refetch}
            />
            <ShowMore setPage={setPage} isLoading={isLoading} />
        </section>
    )
}