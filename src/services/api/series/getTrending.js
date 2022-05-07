import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/series/basicStructure';

export const getTrending = (signal, page = 1) => {
    
    return handleFetch(`${apiURL}trending/tv/day${apiKey}&page=${page}`, signal)
    .then(data => {
        return basicStructure(data.results);
    })

}
