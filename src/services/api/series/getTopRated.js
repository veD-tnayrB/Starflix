import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/series/basicStructure';

export const getTopRated = async () => {
    const data = await handleFetch(`${apiURL}tv/top_rated${apiKey}`);

    return basicStructure(data.results);
}
