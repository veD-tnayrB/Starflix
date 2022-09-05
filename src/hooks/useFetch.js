import { useState, useEffect } from 'react';

function useFetch(url, defaultValue = [], handleData) {
    const [data, setData] = useState(defaultValue);
    const { isLoading, setIsLoading } = useState(true);
    const [error, setError] = useState('');

    async function makeRequest() {
        setIsLoading(true);

        try {
            const response = await fetch(url);
            const info = await response.json();
            const theresAnError = info.status_message;
            const theresHadleDataFunction = handleData;

            if (theresAnError) {
                throw Error(info.status_message);
            }
            
            if (theresHadleDataFunction) {
                handleData(info);
                setIsLoading(false);
                return;
            }

            setData(info)
            setIsLoading(false);

        } catch (error) {
            console.error(error)
            setError(error.message);
        }
    }

    useEffect(() => {
        makeRequest();
    }, [url])

    return [ data, setData, error, isLoading, makeRequest ];
}

export default useFetch;