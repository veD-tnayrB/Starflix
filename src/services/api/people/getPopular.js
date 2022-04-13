import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/people/basicStructure';

export const getPopular = async () => {
    const data = await handleFetch(`${apiURL}person/popular${apiKey}`);

    return basicStructure(data.results);
}
