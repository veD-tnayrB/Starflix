import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/movies/basicStructure';

export const getUpcoming = (signal) => {
    
    return handleFetch(`${apiURL}movie/upcoming${apiKey}`, signal)
    .then(data => {
        return basicStructure(data.results);
    });
}
