import { apiURL, apiKey } from '../index';
import basicStructure from 'adapters/movies/basicStructure';

export const searchMovie = (query, page = 1) => {

    return fetch(`${apiURL}search/movie${apiKey}&query=${query}&page=${page}`)
    .then(response => response.json())
    .then(data => {
        return basicStructure(data.results);
    })
    .catch(err => err)

}
