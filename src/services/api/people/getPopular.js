import { handleFetch, apiURL, apiKey } from './index';
import basicStructure from 'adapters/people/basicStructure';

export const getUpcoming = async () => {
    const data = await handleFetch(`${apiURL}person/popular${apiKey}`);

    return getBasicMedia(data.results);
}
