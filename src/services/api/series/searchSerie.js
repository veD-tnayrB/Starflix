import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/series/basicStructure';

export const searchSerie = async (query, page = 1) => {
    const data = await handleFetch(`${apiURL}search/tv${apiKey}&query=${query}&page=${page}}`);

    return basicStructure(data.results);
}
