import { API_KEY, BASE_URL } from "services/config";

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