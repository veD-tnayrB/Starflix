import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { getCredits, getDetails, getReviews, getSimilar } from "services/series";
import Hero from "./Hero";
import Reviews from "components/reviews/Reviews";
import Credits from "components/credits";
import Similar from "components/similar";

import '../detailed-media.scss';
import Navbar from "components/navbar";
import Footer from "components/footer";
import Loading from "components/loading";


export default
function DetailedSerie() {
    const [serie, setSerie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { serieId } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setIsLoading(true);

        getDetails(signal, serieId)
            .then(response => {
                setSerie(response);
                setIsLoading(false);
            })

        return () => controller.abort();
    }, [serieId]);

    return (
        <>
            <Navbar />
            <main className="detailed-page">
                <Hero serie={serie} />
                <Credits
                    id={serieId}
                    service={getCredits}
                    type="person"
                    title="People Involved"
                />

                <Similar
                    id={serieId}
                    service={getSimilar}
                    title="Similar Series"
                    type="serie"
                />

                <Reviews
                    service={getReviews}
                    id={serieId}
                />
            </main>

            <Footer />
        </>
    )
}