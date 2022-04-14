import React, { useState, useEffect } from 'react'
import { InView } from 'react-intersection-observer';

import { getTrending, searchMovie } from 'services/api/movies'
import SearchBar from 'pages/main/components/searchbar';
import List from 'pages/main/components/list';


const Movies = () => {
    const [movieList, setMovieList] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [page, setPage] = useState(1);
    const lastPageToLoad = 10;

    useEffect(() => {
        const getNewMovies = async () => {
            const newMovies = await getTrending(page);
            setMovieList(prevMovies => ([...prevMovies, ...newMovies]))
        }

        getNewMovies();
    }, [page])

    const updatePage = () => {
        setPage(prevPage => prevPage + 1);
    }

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
                    <List
                     listName="Results"
                     items={searchResults}
                    />
                </section>
                :
                <>
                    <section className="list-section">
                        <List
                         listName="Trending Movies"
                         items={movieList}
                        />
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