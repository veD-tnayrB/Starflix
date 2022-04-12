import { handleFetch, apiURL, apiKey } from '../index';

export const getGenres = async () => {
    const data = await handleFetch(`${apiURL}genre/movie/list${apiKey}`);

    return data.results;
}