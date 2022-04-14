import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/people/basicStructure';

export const searchPeople = async (query, page = 1) => {
    const data = await handleFetch(`${apiURL}search/person${apiKey}&query=${query}&page=${page}}`);

    return basicStructure(data.results);
}
