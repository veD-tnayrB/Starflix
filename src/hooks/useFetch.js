import { useState, useEffect } from 'react';

function useFetch(url, defaultValue = [], options = {}) {
    const [data, setData] = useState(defaultValue);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    async function makeRequest() {
        setIsLoading(true);

        try {
            const response = await fetch(url, options);
            const info = await response.json();
            const theresAnError = info.status_message;

            if (theresAnError) {
                throw Error(info.status_message);
            }

            setData(info);
            setIsLoading(false);

        } catch (error) {
            console.error(error)
            setError(error.message);
        }
    }

    useEffect(() => {
        (async () => await makeRequest())();
    }, [])

    return [ data, error, isLoading, makeRequest ];
}

export default useFetch;