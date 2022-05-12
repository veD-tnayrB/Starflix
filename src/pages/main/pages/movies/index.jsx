import React, { useState, useEffect } from 'react'
import { InView } from 'react-intersection-observer';

import SearchBar from 'pages/main/components/searchbar';
import MovieCard from 'pages/main/components/card/movieCard';
import Loading from 'pages/main/pages/loading';

import { getTrending, searchMovie } from 'services/api/movies'


const Movies = () => {
    const [movieList, setMovieList] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const lastPageToLoad = 10;


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getTrending(signal, page)
        .then(newMovies => {
            setMovieList(prevMovies => ([...prevMovies, ...newMovies]));
        })

        return () => {
            controller.abort()
        }
    }, [page])


    const updatePage = (inView) => {
        if (inView) {
            setPage(prevPage => prevPage + 1);
        }
    }

    const search = (searchValue) => {
        // In case of searchValue === '' will be showed trending movies else the results will be showed
        if (searchValue === '') {
            setSearchResults([]); 
            return;
        }

        setIsLoading(true);

        searchMovie(searchValue)
        .then(results => {
            console.log(results)
            setSearchResults(results);
            setIsLoading(false);
        })
    }

    const moviesElements = movieList.map(movie => (
        <MovieCard 
         key={movie.id}
         movie={movie}
        />
    ))

    const resultsElements = searchResults.map(result => (
        <MovieCard
         key={result.id}
         movie={result}
        />
    ))
    
    if (isLoading) {
        return <Loading />;
    }


    return (
        <main>
            <h2>Search Movie</h2>
            <SearchBar 
             type="Movies"
             onSubmit={search}
            />
            
            {
                searchResults.length > 0 
                ?
                <section className="list-section">
                    <h3>Results</h3>
                    <ol>
                        {resultsElements}
                    </ol>
                </section>
                :
                <>
                    <section className="list-section">
                        <h3>Trending Movies</h3>
                        <ol>
                            {moviesElements}
                        </ol>
                    </section>
                    {
                        page < lastPageToLoad &&
                        <InView
                         as="div"
                         onChange={updatePage}
                        >
                            <h4>Loading...</h4>
                        </InView>
                    }
                </>
            }
        </main>
    )
}

export default Movies;