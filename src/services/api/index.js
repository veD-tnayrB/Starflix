export const apiURL = 'https://api.themoviedb.org/3/';
export const apiKey = '?api_key=c421e24b15869ea8f51f9e056f5494ee';
export const apiImageURL = 'https://image.tmdb.org/t/p/original';

export const handleFetch = async (url, signal) => {

    return fetch(url, { signal })
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(error => console.log(error))

}