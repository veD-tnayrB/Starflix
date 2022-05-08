import { apiURL, apiKey } from '../index';
import basicStructure from 'adapters/people/basicStructure';

export const getPopular = (signal, page = 1) => {
    
    return fetch(`${apiURL}person/popular${apiKey}&page=${page}`, { signal })
    .then(response => response.json())
    .then(data => {
        return basicStructure(data.results);
    })
    .catch(err => err)

}
