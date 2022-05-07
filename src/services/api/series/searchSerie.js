import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/series/basicStructure';

export const searchSerie = (signal, query, page = 1) => {
    
    return handleFetch(`${apiURL}search/tv${apiKey}&query=${query}&page=${page}}`, signal)
    .then(data => {
        return basicStructure(data.results);
    })

}
