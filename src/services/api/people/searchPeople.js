import { apiURL, apiKey } from '../index';
import basicStructure from 'adapters/people/basicStructure';

export const searchPeople = (query, page = 1) => {
    
    return fetch(`${apiURL}search/person${apiKey}&query=${query}&page=${page}}`)
    .then(response => response.json())
    .then(data => {
        return basicStructure(data.results);
    })
    .catch(err => err)

}
