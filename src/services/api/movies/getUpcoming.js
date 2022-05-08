import { apiURL, apiKey } from '../index';
import basicStructure from 'adapters/movies/basicStructure';

export const getUpcoming = (signal) => {
    
    return fetch(`${apiURL}movie/upcoming${apiKey}`, { signal })
    .then(response => response.json())
    .then(data => {
        return basicStructure(data.results);
    })
    .catch(err => err)
}
