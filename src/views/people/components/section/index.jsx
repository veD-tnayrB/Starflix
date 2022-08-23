import { useState } from "react";
import List from "components/list";
import { Person } from "components/media";
import ShowMore from "components/show-more";
import useFetch from "hooks/useFetch";


export default
function Section({ url, sectionTitle, sectionId }) {
    const [page, setPage] = useState(1);
    const [people, setPerson, error, isLoading, refetch] = useFetch(`${url}&page=${page}`, { results: [] }, loadMore);

    function loadMore(newPeoeple) {
        setPerson(currentPeople => (
            {...currentPeople, results: [...currentPeople?.results, ...newPeoeple.results]}
        ))
    }

    const peopleElements = people.results.map(person => (
        <Person
         key={person.id}
         person={person}
        />
    ));
        
    return (
        <section>
            <List
             items={peopleElements}
             listId={sectionId}
             listTitle={sectionTitle}
             isLoading={isLoading}
             error={error}
             refetch={refetch}
            >
                <ShowMore setPage={setPage} isLoading={isLoading} />
            </List>
        </section>
    )
}