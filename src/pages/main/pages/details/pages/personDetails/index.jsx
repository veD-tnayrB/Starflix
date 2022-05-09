import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loading from 'pages/main/pages/loading';

import { getDetails } from 'services/api/people';
import { apiImageURL } from 'services/api';



const PersonDetails = () => {
    const [personDetails, setPersonDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { personId } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getDetails(personId, signal)
        .then(details => {
            setPersonDetails(details);
            setIsLoading(false);
        })

        return () => {
            controller.abort();
        }
    }, [personId])

    if (isLoading) {
        return <Loading />;
    }

    return (
        <main>
            <img 
             src={`${apiImageURL}${personDetails.profile}`}
             alt={personDetails.name}
            />
            <h2>{personDetails.name}</h2>

            Esto es person details
        </main>
    )
}

export default PersonDetails;