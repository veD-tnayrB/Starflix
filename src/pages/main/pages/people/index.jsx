import React, { useState, useEffect } from 'react'
import { InView } from 'react-intersection-observer';

import { getPopular, searchPeople } from 'services/api/people';
import SearchBar from 'pages/main/components/searchbar';
import List from 'pages/main/components/list';


const People = () => {
    const [peopleList, setPeopleList] = useState([]);
    const [page, setPage] = useState(1);
    const lastPageToLoad = 10;

    useEffect(() => {
        const getNewPeople = async () => {
            const newPeople = await getPopular(page);
            setPeopleList(prevPeople => ([...prevPeople, ...newPeople]))
        }

        getNewPeople();
    }, [page])

    const updatePage = () => {
        setPage(prevPage => prevPage + 1);
    }

    return (
        <main className="category-page">
            <h2>Search Person</h2>
            <SearchBar
                type="Series"
                makeFetchTo={searchPeople}
                results={setPeopleList}
            />

            <section className="list-section">
                <List
                    listName="Popular People"
                    items={peopleList}
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

export default People;