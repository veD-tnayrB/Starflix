import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCredits, getDetails, getReviews, getSimilar } from "services/movies";
import Navbar from "components/navbar";
import Hero from "./Hero";
import Reviews from "../../reviews/Reviews";
import Similar from "./Similar";
import Footer from "components/footer";

import '../detailed-media.scss';
import Credits from "components/credits/Credits";

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
                <Reviews 
                    service={getReviews} 
                    id={movieId} 
                />

                <Credits 
                    id={movieId}
                    service={getCredits}
                    type="movie"
                />

                <Similar 
                    title="Similar Movies"
                    service={getSimilar}
                    id={movieId}
                    type="movie"
                />
            </main>
            <Footer />
        </>
    )
}