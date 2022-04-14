import React, { useState, useEffect } from 'react'
import { InView } from 'react-intersection-observer';

import { getTrending, searchSerie } from 'services/api/series'
import SearchBar from 'pages/main/components/searchbar';
import List from 'pages/main/components/list';


const Series = () => {
    const [seriesList, setSeriesList] = useState([]);
    const [page, setPage] = useState(1);
    const lastPageToLoad = 10;

    useEffect(() => {
        const getNewSeries = async () => {
            const newSeries = await getTrending(page);
            setSeriesList(prevSeries => ([...prevSeries, ...newSeries]))
        }

        getNewSeries();
    }, [page])

    const updatePage = () => {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <main className="category-page">
            <h2>Search Serie</h2>
            <SearchBar
             type="Series"
             makeFetchTo={searchSerie}
             results={setSeriesList}
            />

            <section className="list-section">
                <List
                    listName="Trending Series"
                    items={seriesList}
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
        </main>
    )
}

export default Series;