import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/movies/basicStructure';

export const getTrending = async (page = 1) => {
    const data = await handleFetch(`${apiURL}trending/movie/day${apiKey}&page=${page}`);
    
    return basicStructure(data.results);
}
