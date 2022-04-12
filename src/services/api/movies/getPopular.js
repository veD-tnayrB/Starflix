import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/movies/basicStructure';

export const getPopular = async (page = 1) => {
    console.log(page)
    const data = await handleFetch(`${apiURL}movie/popular${apiKey}&page=${page}`);

    return basicStructure(data.results);
}
