import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetails, getMovieCredits, getSeriesCredits } from "services/people";
import Footer from "components/footer";
import Navbar from "components/navbar";
import Hero from "./Hero";
import Credits from "components/credits";
import Loading from "components/loading";

export default
function DetailedPerson() {
    const [person, setPerson] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { personId } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setIsLoading(true);

        getDetails(signal, personId)
        .then(response => {
            setPerson(response);
            setIsLoading(false);
        })

        return () => controller.abort();
    }, [personId]);

    if (isLoading) return <Loading />;

    return (
        <>
            <Navbar />
            <main className="detailed-page">
                <Hero person={person} />
                <Credits 
                    title="Participate in"
                    id={personId}
                    service={getMovieCredits}
                    type="movie"
                />

                <Credits 
                    title="Also in..."
                    id={personId}
                    service={getSeriesCredits}
                    type="serie"
                />
            </main>
            <Footer />
        </>
    )
}