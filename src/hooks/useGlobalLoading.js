import { useState, useEffect } from 'react';
const TIME = 2000;

export default
function useGlobalLoading() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), TIME);
    }, []);

    return { isLoading };
}