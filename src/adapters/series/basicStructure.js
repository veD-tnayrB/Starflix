export const basicStructure = (mediaList) => {
    const adaptedMediaList = mediaList.map(media => (
        {
            id: media.id,
            title: media.original_name,
            poster: media.poster_path,
            backdrop: media.backdrop_path,
            overview: media.overview
        }
    ))

    return adaptedMediaList;
}