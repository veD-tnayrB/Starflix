import { handleFetch, apiURL, apiKey } from './index';
import basicStructure from 'adapters/series/basicStructure';

export const getTrending = async (media) => {
    const data = await handleFetch(`${apiURL}trending/tv/day${apiKey}`);

    return getBasicMedia(data.results);
}
