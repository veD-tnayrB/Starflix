import { apiURL, apiKey } from '../index';
import advancedStructure from 'adapters/series/advancedStructure';

export const getDetails = (serieId, signal) => {

    return fetch(`${apiURL}/tv/${serieId}${apiKey}`, { signal })
    .then(response => response.json())
    .then(data => {
        return advancedStructure(data.results);
    })
    .catch(err => err)
    
}