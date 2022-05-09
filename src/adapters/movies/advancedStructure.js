const advancedStructure = (movie) => {
    const adaptedMovie = {
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path,
        backdrop: movie.backdrop_path,
        genres: movie.genres,
        overview: movie.overview,
        popularity: movie.popularity,
        release_date: movie.release_date,
        languages: movie.spoken_languages,
        status: movie.status,
    }

    return adaptedMovie;
}

export default advancedStructure;