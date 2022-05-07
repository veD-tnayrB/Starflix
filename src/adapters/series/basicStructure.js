export const basicStructure = (mediaList) => {
    const adaptedMediaList = mediaList.map(media => (
        {
            id: media.id,
            name: media.original_name,
            poster: media.poster_path
        }
    ))

    return adaptedMediaList;
}

export default basicStructure;