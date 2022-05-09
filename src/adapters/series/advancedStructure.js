const advancedStructure = (serie) => {
    const adaptedSerie = {
        id: serie.id,
        name: serie.name,
        poster: serie.poster_path,
        backdrop: serie.backdrop_path,
        overview: serie.overview,
        genres: serie.genres,
        popularity: serie.popularity,
        author: serie.created_by,
        firstAirDate: serie.first_air_date,
        numberOfEpisodes: serie.number_of_episodes,
        numberOfSeasons: serie.number_of_seasons
    }

    return adaptedSerie;
}

export default advancedStructure;