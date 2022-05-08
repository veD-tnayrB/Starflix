import { apiURL, apiKey } from '../index';
import basicStructure from 'adapters/movies/basicStructure';

export const getTrending = (signal, page = 1) => {

    return fetch(`${apiURL}trending/movie/day${apiKey}&page=${page}`, { signal })
    .then(response => response.json())
    .then(data => {
        return basicStructure(data.results);
    })
    .catch(err => err)
    
}
