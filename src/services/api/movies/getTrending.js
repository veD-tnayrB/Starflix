import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/movies/basicStructure';

export const getTrending = (signal, page = 1) => {

    return handleFetch(`${apiURL}trending/movie/day${apiKey}&page=${page}`, signal)
    .then(data => {
        return basicStructure(data.results);
    })
    
}
