import React, { useState, useEffect } from 'react'
import { InView } from 'react-intersection-observer';

import SearchBar from 'pages/main/components/searchbar';
import PersonCard from 'pages/main/components/card/personCard';
import Loading from 'pages/main/pages/loading';

import { getPopular, searchPeople } from 'services/api/people';


const People = () => {
    const [peopleList, setPeopleList] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const lastPageToLoad = 10;


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getPopular(signal, page)
        .then(newPeople => {
            setPeopleList(prevPeople => ([...prevPeople, ...newPeople]));
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

        searchPeople(searchValue)
        .then(results => {
            setSearchResults(results);
            setIsLoading(false);
        })
    }

    const peopleElements = peopleList.map(person => (
        <PersonCard 
         key={person.id}
         person={person}
        />
    ))

    const searchResultsElements = searchResults.map(result => (
        <PersonCard 
         key={result.id}
         person={result}
        />
    ))

    if (isLoading) {
        return <Loading />;
    }


    return (
        <main>
            <h2>Search Person</h2>
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
                <>
                    <section className="list-section">
                        <h3>Popular People</h3>
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
                </>
            }
        </main>
    )
}

export default People;