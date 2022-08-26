const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '?api_key=c421e24b15869ea8f51f9e056f5494ee';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const routes = {
    movies: {
        getPopular: `${BASE_URL}movie/popular${API_KEY}`,
        getTopRated: `${BASE_URL}movie/top_rated${API_KEY}`,
        getUpcoming: `${BASE_URL}movie/upcoming${API_KEY}`,
        getNowPlaying: `${BASE_URL}movie/now_playing${API_KEY}`
    },

    series: {
        getPopular: `${BASE_URL}tv/popular${API_KEY}`,
        getTopRated: `${BASE_URL}tv/top_rated${API_KEY}`,
        getOnTheAir: `${BASE_URL}tv/on_the_air${API_KEY}`,
        getAiring: `${BASE_URL}tv/airing_today${API_KEY}`
    },

    people: {
        getPopular: `${BASE_URL}person/popular${API_KEY}`
    }
}

export default routes;