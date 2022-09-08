import { API_KEY, BASE_URL } from "services/config";

export const search = async (query) => {
    const response = await fetch(`${BASE_URL}search/person${API_KEY}&query=${query}`);
    return response.json();
}

export const getPopular = async (signal, page) => {
    const response = await fetch(`${BASE_URL}person/popular${API_KEY}&page=${page}`, { signal });
    return response.json();
}