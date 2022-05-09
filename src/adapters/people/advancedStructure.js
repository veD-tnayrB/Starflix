const advancedStructure = (person) => {
    const adaptedPerson = {
        id: person.id,
        name: person.name,
        birthday: person.birthday,
        biography: person.biography,
        popularity: person.popularity,
        profile: person.profile_path,
        adult: person.adult
    }

    return adaptedPerson;
}

export default advancedStructure;