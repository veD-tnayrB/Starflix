import { Person } from "components/media";
import useFetch from "hooks/useFetch";
import routes from "routes/api";
import List from "../../../../components/list";

export default
function PopularPeople() {
    const [popularPeople,, peopleError, isPeopleLoading, refetchPeople] = useFetch(routes.people.getPopular, { results: [] });
    const popularPeopleItems = popularPeople.results.map(person => <Person key={person.id} person={person} />);

    return (
        <List
            listTitle="Popular People"
            items={popularPeopleItems}
            urlToBeRedirected="/"
            isLoading={isPeopleLoading}
            error={peopleError}
            refetch={refetchPeople}
        />
    )
}