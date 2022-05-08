import { apiURL, apiKey } from '../index';
import basicStructure from 'adapters/series/basicStructure';

export const searchSerie = (query, page = 1) => {
    
    return fetch(`${apiURL}search/tv${apiKey}&query=${query}&page=${page}}`)
    .then(response => response.json())
    .then(data => {
        return basicStructure(data.results);
    })
    .catch(err => err)

}
