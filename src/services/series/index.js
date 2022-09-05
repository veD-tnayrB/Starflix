import { API_KEY, BASE_URL } from "services/config";

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