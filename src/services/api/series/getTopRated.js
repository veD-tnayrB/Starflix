import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/series/basicStructure';

export const getTopRated = (signal) => {
    
    return handleFetch(`${apiURL}tv/top_rated${apiKey}`, signal)
    .then(data => {
        return basicStructure(data.results);
    })

}
