import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/movies/basicStructure';

export const getPopular = async () => {
    const data = await handleFetch(`${apiURL}movie/popular${apiKey}`);

    return basicStructure(data.results);
}
