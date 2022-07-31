
import useFetch from "hooks/useFetch";
import Navbar from "components/navbar";
import Hero from "./components/hero";
import LimitedList from "./components/limited-list";
import { Movie, Serie, Person } from 'components/media';
import routes from 'routes/api';

import './home.scss';


export
function Home() {
    const [popularMovies, moviesError, isMovieLoading, refetchMovies] = useFetch(routes.movies.getPopular, { results: [] });
    const [popularSeries, seriesError, isSeriesLoading, refetchSeries] = useFetch(routes.series.getPopular, { results: [] });
    const [popularPeople, peopleError, isPeopleLoading, refetchPeople] = useFetch(routes.people.getPopular, { results: [] });

    const popularMoviesItems = popularMovies.results.map(movie => <Movie key={movie.id} movie={movie} />)
    const popularSeriesItems = popularSeries.results.map(serie => <Serie key={serie.id} serie={serie} />);
    const popularPeopleItems = popularPeople.results.map(person => <Person key={person.id} person={person} />);

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <LimitedList
                 listTitle="Popular Movies" 
                 items={popularMoviesItems} 
                 urlToBeRedirected="/"
                 isLoading={isMovieLoading}
                 error={moviesError}
                 refetch={refetchMovies}
                />

                <LimitedList 
                 listTitle="Popular Series"
                 items={popularSeriesItems}
                 urlToBeRedirected="/"
                 isLoading={isSeriesLoading}
                 error={seriesError}
                 refetch={refetchSeries}
                />
                
                <LimitedList 
                 listTitle="Popular People"
                 items={popularPeopleItems}
                 urlToBeRedirected="/"
                 isLoading={isPeopleLoading}
                 error={peopleError}
                 refetch={refetchPeople}
                />
            </main>
        </>
    )
}