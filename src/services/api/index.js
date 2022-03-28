const apiURL = 'https://api.themoviedb.org/3/';
const apiKey = 'c421e24b15869ea8f51f9e056f5494ee';

const generateUserID = () => (
    (async () => {
        const response = await fetch(`${apiURL}authentication/guest_session/new?api_key=${apiKey}`);
        const data = await response.json();

        return data;
    })()
)

export { generateUserID }