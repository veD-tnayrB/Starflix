import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/series/basicStructure';

export const getPopular = async () => {
    const data = await handleFetch(`${apiURL}tv/popular${apiKey}`);

    return basicStructure(data.results);
}
