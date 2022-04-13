const basicStructure = (peopleList) => {
    const adaptedPeopleList = peopleList.map(person => (
        {
            id: person.id,
            title: person.name,
            poster: person.profile_path,
            popularity: person.popularity,
            adult: person.adult
        }
    ))

    return adaptedPeopleList;
}

export default basicStructure;