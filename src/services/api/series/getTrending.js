import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/series/basicStructure';

export const getTrending = async (page = 1) => {
    const data = await handleFetch(`${apiURL}trending/tv/day${apiKey}&page=${page}`);

    return basicStructure(data.results);
}
