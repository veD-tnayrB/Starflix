import React, { useState, useEffect } from 'react'
import { InView } from 'react-intersection-observer';

import { getPopular, searchPeople } from 'services/api/people';
import SearchBar from 'pages/main/components/searchbar';
import PersonCard from 'pages/main/components/card/personCard';


const People = () => {
    const [peopleList, setPeopleList] = useState([]);
    const [page, setPage] = useState(1);
    const lastPageToLoad = 10;

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getPopular(signal)
        .then(newPeople => {
            setPeopleList(prevPeople => ([...prevPeople, ...newPeople]))
        })

        return () => {
            controller.abort()
        }
    }, [page])

    const updatePage = () => {
        setPage(prevPage => prevPage + 1);
    }

    const peopleElements = peopleList.map(person => (
        <PersonCard 
         key={person.id}
         person={person}
        />
    ))

    return (
        <main className="category-page">
            <h2>Search Person</h2>
            <SearchBar
             type="Series"
             makeFetchTo={searchPeople}
             results={setPeopleList}
            />

            <section className="list-section">
                <ol>
                    {peopleElements}
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

export default People;