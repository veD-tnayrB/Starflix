import { handleFetch, apiURL, apiKey } from './index';
import basicStructure from 'adapters/series/basicStructure';

export const getUpcoming = async () => {
    const data = await handleFetch(`${apiURL}tv/upcoming${apiKey}`);

    return getBasicMedia(data.results);
}
