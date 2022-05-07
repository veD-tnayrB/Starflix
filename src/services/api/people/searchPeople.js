import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/people/basicStructure';

export const searchPeople = async (query, page = 1, signal) => {
    
    return handleFetch(`${apiURL}search/person${apiKey}&query=${query}&page=${page}}`, signal)
    .then(data => {
        return basicStructure(data.results)
    });

}
