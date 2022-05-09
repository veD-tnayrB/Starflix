import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Loading from 'pages/main/pages/loading';
import Header from 'pages/main/pages/details/components/header';

import { getDetails } from 'services/api/series';


const SeriesDetails = () => {
    const [seriesDetails, setSeriesDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { serieId } = useParams();


    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getDetails(serieId, signal)
        .then(details => {
            setSeriesDetails(details);
            setIsLoading(false);
        })

        return () => {
            controller.abort();
        }
    }, [serieId])


    if (isLoading) {
        return <Loading />;
    }

    
    return (
        <main>
            <Header 
             poster={seriesDetails.poster}
             backdrop={seriesDetails.backdrop}
             title={seriesDetails.name}
            />

            Esto es serie details
        </main>
    )
}

export default SeriesDetails;