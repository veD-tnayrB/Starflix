export const apiURL = 'https://api.themoviedb.org/3';
export const apiKey = '?api_key=c421e24b15869ea8f51f9e056f5494ee';

export const apiImageURL = 'https://image.tmdb.org/t/p/original/';

const handleFetch = async (url, errorMessage) => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data)

    } catch (error) {
        console.error(error);
    }
}

export const getPopular = (query) => {
    handleFetch(`${apiURL}/${query}/popular${apiKey}`);
}