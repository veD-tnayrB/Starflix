import { handleFetch, apiURL, apiKey } from '../index';
import basicStructure from 'adapters/movies/basicStructure';

export const searchMovie = (signal, query, page = 1) => {

    return handleFetch(`${apiURL}search/movie${apiKey}&query=${query}&page=${page}}`, signal)
    .then(data => {
        return basicStructure(data.results);
    });

}
