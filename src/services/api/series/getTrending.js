import { apiURL, apiKey } from '../index';
import basicStructure from 'adapters/series/basicStructure';

export const getTrending = (signal, page = 1) => {
    
    return fetch(`${apiURL}trending/tv/day${apiKey}&page=${page}`, { signal })
    .then(response => response.json())
    .then(data => {
        return basicStructure(data.results);
    })
    .catch(err => err)

}
