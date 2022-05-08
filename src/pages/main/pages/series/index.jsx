import React, { useState, useEffect } from 'react'
import { InView } from 'react-intersection-observer';

import SearchBar from 'pages/main/components/searchbar';
import SerieCard from 'pages/main/components/card/serieCard';
import Loading from 'pages/main/pages/loading';

import { getTrending, searchSerie } from 'services/api/series'


const Series = () => {
    const [seriesList, setSeriesList] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const lastPageToLoad = 10;

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getTrending(signal, page)
        .then(newSeries => {
            setSeriesList(prevSeries => ([...prevSeries, ...newSeries]));
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
        if (searchValue === '') {
            setSearchResults([]);
            return;
        }

        setIsLoading(true);

        searchSerie(searchValue)
        .then(results => {
            setSearchResults(results);
            setIsLoading(false);
        })
    }

    const seriesElements = seriesList.map(serie => (
        <SerieCard 
         key={serie.id}
         serie={serie}
        />
    ))

    const searchResultsElements = searchResults.map(result => (
        <SerieCard 
         key={result.id}
         serie={result}
        />
    ))

    if (isLoading) {
        return <Loading />;
    }

    return (
        <main>
            <h2>Search Serie</h2>
            <SearchBar
             type="Series"
             onSubmit={search}
            />

            {
                searchResults.length > 0
                ?
                <section className="list-section">
                    <h3>Results</h3>
                    <ol>
                        {searchResultsElements}
                    </ol>
                </section>
                :
                <section className="list-section">
                    <h3>Trending Series</h3>
                    <ol>
                        {seriesElements}
                    </ol>

                    {
                        page < lastPageToLoad &&
                        <InView
                         as="div"
                         onChange={updatePage}
                        >
                            <h4>Loading...</h4>
                        </InView>
                    }
                </section>
            }
            
        </main>
    )
}

export default Series;