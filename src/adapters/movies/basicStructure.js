const basicStructure = (mediaList) => {
    const adaptedMediaList = mediaList.map(media => (
        {
            id: media.id,
            title: media.original_title,
            poster: media.poster_path,
            backdrop: media.backdrop_path,
            overview: media.overview,
            adult: media.adult
        }
    ))

    return adaptedMediaList;
}

export default basicStructure;