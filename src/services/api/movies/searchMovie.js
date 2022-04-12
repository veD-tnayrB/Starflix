import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/movies/basicStructure';

export const searchMovie = async (query, page = 1) => {
    const data = await handleFetch(`${apiURL}search/movie${apiKey}&query=${query}&page=${page}}`);

    return basicStructure(data.results);
}
