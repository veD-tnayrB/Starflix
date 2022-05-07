const basicStructure = (movieList) => {
    const adaptedMoviesList = movieList.map(movie => (
        {
            id: movie.id,
            title: movie.original_title,
            poster: movie.poster_path,
            backdrop: movie.backdrop_path,
            overview: movie.overview,
            adult: movie.adult
        }
    ))

    return adaptedMoviesList;
}

export default basicStructure;