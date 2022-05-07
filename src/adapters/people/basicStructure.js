const basicStructure = (peopleList) => {
    const adaptedPeopleList = peopleList.map(person => (
        {
            id: person.id,
            name: person.name,
            profile: person.profile_path
        }
    ))

    return adaptedPeopleList;
}

export default basicStructure;