import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/movies/basicStructure';

export const getUpcoming = async () => {
    const data = await handleFetch(`${apiURL}movie/upcoming${apiKey}`);

    return basicStructure(data.results);
}
