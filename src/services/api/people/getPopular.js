import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/people/basicStructure';

export const getPopular = async (signal, page = 1) => {
    
    return handleFetch(`${apiURL}person/popular${apiKey}&page=${page}`, signal)
    .then(data => {
        return basicStructure(data.results)
    });

}
