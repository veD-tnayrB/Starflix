import { apiURL, apiKey } from '../index';
import advancedStructure from 'adapters/people/advancedStructure';

export const getDetails = (personId, signal) => {

    return fetch(`${apiURL}/person/${personId}${apiKey}`, { signal })
    .then(response => response.json())
    .then(data => {
        return advancedStructure(data.results);
    })
    .catch(err => err)

}