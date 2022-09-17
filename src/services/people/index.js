import { API_KEY, BASE_URL } from "services/config";

export const search = async (query) => {
    const response = await fetch(`${BASE_URL}search/person${API_KEY}&query=${query}`);
    return response.json();
}

export const getPopular = async (signal, page) => {
    const response = await fetch(`${BASE_URL}person/popular${API_KEY}&page=${page}`, { signal });
    return response.json();
}

export const getDetails = async (signal, personId) => {
    const response = await fetch(`${BASE_URL}person/${personId}${API_KEY}`, { signal });
    return response.json();
}

export const getMovieCredits = async (signal, personId) => {
    const response = await fetch(`${BASE_URL}person/${personId}/movie_credits${API_KEY}`, { signal });
    return response.json();
}

export const getSeriesCredits = async (signal, personId) => {
    const response = await fetch(`${BASE_URL}person/${personId}/tv_credits${API_KEY}`, { signal });
    return response.json();
}