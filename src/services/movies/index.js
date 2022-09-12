import { API_KEY, BASE_URL } from "services/config";

export const search = async (query) => {
    const response = await fetch(`${BASE_URL}search/movie${API_KEY}&query=${query}`);
    return response.json();
}

export const getPopular = async (signal, page) => {
    const response = await fetch(`${BASE_URL}movie/popular${API_KEY}&page=${page}`, { signal });
    return response.json();
    
}

export const getTopRated = async (signal, page) => {
    const response = await fetch(`${BASE_URL}movie/top_rated${API_KEY}&page=${page}`, { signal });
    return response.json();
    
}

export const getUpcoming = async (signal, page) => {
    const response = await fetch(`${BASE_URL}movie/upcoming${API_KEY}&page=${page}`, { signal });
    return response.json();
    
}

export const getNowPlaying = async (signal, page) => {
    const response = await fetch(`${BASE_URL}movie/now_playing${API_KEY}&page=${page}`, { signal });
    return response.json();
    
}

export const getDetails = async (signal, movieId) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}${API_KEY}`, { signal });
    return response.json();
}

export const getReviews = async (signal, movieId) => {
    const response = await fetch(`${BASE_URL}movie/${movieId}/reviews${API_KEY}`, { signal });
    return response.json();
}

export const getSimilar = async (signal, movieId) => {
    const response = await fetch(`${BASE_URL}movie/${movieId}/similar${API_KEY}`, { signal });
    return response.json();
}

export const getCredits = async (signal, movieId) => {
    const response = await fetch(`${BASE_URL}movie/${movieId}/credits${API_KEY}`, { signal });
    return response.json();
}