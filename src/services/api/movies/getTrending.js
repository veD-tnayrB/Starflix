import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/movies/basicStructure';

export const getTrending = async (media) => {
    const data = await handleFetch(`${apiURL}trending/movie/day${apiKey}`);
    
    return basicStructure(data.results);
}
