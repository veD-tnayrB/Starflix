import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/movies/basicStructure';

export const getPopular = (signal) => {
    
    handleFetch(`${apiURL}movie/popular${apiKey}`, signal)
    .then(data => {
        return basicStructure(data.results);
    })

}
