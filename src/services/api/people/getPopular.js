import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/people/basicStructure';

export const getPopular = async (page = 1) => {
    const data = await handleFetch(`${apiURL}person/popular${apiKey}&page=${page}`);

    return basicStructure(data.results);
}
