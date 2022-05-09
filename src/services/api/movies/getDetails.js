import { apiURL, apiKey } from '../index';
import advancedStructure from 'adapters/movies/advancedStructure';


export const getDetails = (movieId, signal) => {

    return fetch(`${apiURL}/movie/${movieId}${apiKey}`, { signal })
    .then(response => response.json())
    .then(data => {
        return advancedStructure(data.results);
    })
    .catch(err => err)

}