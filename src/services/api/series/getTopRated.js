import { apiURL, apiKey } from '../index';
import basicStructure from 'adapters/series/basicStructure';

export const getTopRated = (signal) => {
    
    return fetch(`${apiURL}tv/top_rated${apiKey}`, { signal })
    .then(response => response.json())
    .then(data => {
        return basicStructure(data.results);
    })
    .catch(err => err)

}
