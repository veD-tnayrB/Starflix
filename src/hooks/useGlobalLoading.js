import { useState, useEffect } from 'react';
const TIME = 1000;

export default
function useGlobalLoading() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), TIME);
    }, []);

    return { isLoading };
}