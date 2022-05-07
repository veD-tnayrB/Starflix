import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch(url, { signal })
        .then(res => res.json())
        .then(data => {
            if (data.status === 200) {
                setResponse(data.results);
                setIsLoading(false);
                return;
            }

            setError(data.message);
            setIsLoading(false);
        })

        return () => {
            controller.abort();
        }
    }, []) 

    return {response, isLoading, error};
} 