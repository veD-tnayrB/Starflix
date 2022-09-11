import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "services/movies";
import Hero from "./Hero";

import '../detailed-media.scss';
import Navbar from "components/navbar";

export default
    function DetailedMovie() {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { movieId } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setIsLoading(true);

        getDetails(signal, movieId)
            .then(response => {
                setMovie(response);
                setIsLoading(false);
            })

        return () => controller.abort();
    }, []);


    return (
        <>
            <Navbar />
            <main className="detailed-page">
                <Hero movie={movie} />
            </main>
        </>
    )
}