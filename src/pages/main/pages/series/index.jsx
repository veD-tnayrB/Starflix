import React, { useState, useEffect } from 'react'
import { InView } from 'react-intersection-observer';

import { getTrending, searchSerie } from 'services/api/series'
import SearchBar from 'pages/main/components/searchbar';
import SerieCard from 'pages/main/components/card/serieCard';


const Series = () => {
    const [seriesList, setSeriesList] = useState([]);
    const [page, setPage] = useState(1);
    const lastPageToLoad = 10;

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getTrending(signal, page)
        .then(newSeries => {
            setSeriesList(prevSeries => ([...prevSeries, ...newSeries]))
        })
        
        return () => {
            controller.abort()
        }
    }, [page])

    const updatePage = () => {
        setPage(prevPage => prevPage + 1);
    }

    const seriesElements = seriesList.map(serie => (
        <SerieCard 
         key={serie.id}
         serie={serie}
        />
    ))

    return (
        <main className="category-page">
            <h2>Search Serie</h2>
            <SearchBar
             type="Series"
             makeFetchTo={searchSerie}
             results={setSeriesList}
            />

            <section className="list-section">
                <ol>
                    {seriesElements}
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
        </main>
    )
}

export default Series;