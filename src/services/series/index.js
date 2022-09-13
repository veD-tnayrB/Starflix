import { API_KEY, BASE_URL } from "services/config";

export const search = async (query) => {
    const response = await fetch(`${BASE_URL}search/tv${API_KEY}&query=${query}`);
    return response.json();
}

export const getPopular = async (signal, page) => {
    const response = await fetch(`${BASE_URL}tv/popular${API_KEY}&page=${page}`, { signal });
    return response.json();
}

export const getTopRated = async (signal, page) => {
    const response = await fetch(`${BASE_URL}tv/top_rated${API_KEY}&page=${page}`, { signal });
    return response.json();
}

export const getOnTheAir = async (signal, page) => {
    const response = await fetch(`${BASE_URL}tv/on_the_air${API_KEY}&page=${page}`, { signal });
    return response.json();
}

export const getAiring = async (signal, page) => {
    const response = await fetch(`${BASE_URL}tv/airing_today${API_KEY}&page=${page}`, { signal });
    return response.json();
}

export const getDetails = async (signal, serieId) => {
    const response = await fetch(`${BASE_URL}tv/${serieId}${API_KEY}`, { signal });
    return response.json();
}

export const getReviews = async (signal, serieId) => {
    const response = await fetch(`${BASE_URL}tv/${serieId}/reviews${API_KEY}`, { signal });
    return response.json();
}

export const getCredits = async (signal, serieId) => {
    const response = await fetch(`${BASE_URL}tv/${serieId}/credits${API_KEY}`, { signal });
    return response.json();
}

export const getSimilar = async (signal, serieId) => {
    const response = await fetch(`${BASE_URL}tv/${serieId}/similar${API_KEY}`, { signal });
    return response.json();
}