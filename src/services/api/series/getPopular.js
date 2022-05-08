import { apiURL, apiKey } from '../index';
import basicStructure from 'adapters/series/basicStructure';

export const getPopular = (signal) => {
    
    return fetch(`${apiURL}tv/popular${apiKey}`, { signal })
    .then(response => response.json())
    .then(data => {
        return basicStructure(data.results);
    })
    .catch(err => err)

}
