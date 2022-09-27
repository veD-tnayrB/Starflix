import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCredits, getDetails, getReviews, getSimilar } from "services/movies";
import Navbar from "components/navbar";
import Hero from "./Hero";
import Reviews from "../../../components/reviews/Reviews";
import Similar from "../../../components/similar";
import Footer from "components/footer";
import Credits from "components/credits";

import '../detailed-media.scss';
import Loading from "components/loading";


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
    }, [movieId]);

    return (
        <>
            <Navbar />
            <main className="detailed-page">
                <Hero movie={movie} />
                <Credits 
                    title="People involved"
                    id={movieId}
                    service={getCredits}
                    type="person"
                />

                <Similar 
                    title="Similar Movies"
                    service={getSimilar}
                    id={movieId}
                    type="movie"
                />

                <Reviews 
                    service={getReviews} 
                    id={movieId} 
                />
            </main>
            <Footer />
        </>
    )
}