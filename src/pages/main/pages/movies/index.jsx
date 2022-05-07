import React, { useState, useEffect } from 'react'
import { InView } from 'react-intersection-observer';

import { getTrending, searchMovie } from 'services/api/movies'
import SearchBar from 'pages/main/components/searchbar';
import MovieCard from 'pages/main/components/card/movieCard';


const Movies = () => {
    const [movieList, setMovieList] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [page, setPage] = useState(1);
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

    const updatePage = () => {
        setPage(prevPage => prevPage + 1);
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

    return (
        <main className="category-page">
            <h2>Search Movie</h2>
            <SearchBar 
             type="Movies"
             makeFetchTo={searchMovie}
             results={setSearchResults}
            />
            
            {
                searchResults.length > 0 ?
                <section className="list-section">
                    <ol>
                        {resultsElements}
                    </ol>
                </section>
                :
                <>
                    <section className="list-section">
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