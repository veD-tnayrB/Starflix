import React, { useState, useEffect } from 'react'
import { InView } from 'react-intersection-observer';

import { getPopular, searchMovie } from 'services/api/movies'
import SearchBar from 'pages/main/components/searchbar';
import List from 'pages/main/components/list';

const Movies = () => {
    const [movieList, setMovieList] = useState([]);
    const [page, setPage] = useState(1);
    const lastPageToLoad = 10;

    useEffect(() => {
        const getNewMovies = async () => {
            const newMovies = await getPopular(page);
            setMovieList(prevMovies => ([...prevMovies, ...newMovies]))
        }

        getNewMovies();
    }, [page])

    const updatePage = () => {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <main className="movies-page">
            <h2>Search Movie</h2>
            <SearchBar 
             type="Movies"
             makeFetchTo={searchMovie}
             results={setMovieList}
            />
            
            <section className="movies-section">
                <List
                 listName="Popular Movies" 
                 items={movieList}
                />
            </section>
            {
                page < lastPageToLoad &&
                <InView 
                 as="div"
                 onChange={updatePage}
                >
                    <h1>HELLO</h1>
                </InView>
            }
        </main>
    )
}

export default Movies;