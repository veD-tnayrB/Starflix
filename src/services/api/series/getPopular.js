import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/series/basicStructure';

export const getPopular = (signal) => {
    
    return handleFetch(`${apiURL}tv/popular${apiKey}`, signal)
    .then(data => {
        return basicStructure(data.results);
    })

}
