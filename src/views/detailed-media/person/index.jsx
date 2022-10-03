import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetails, getMovieCredits, getSeriesCredits } from "services/people";
import Footer from "components/footer";
import Navbar from "components/navbar";
import Hero from "./Hero";
import Credits from "components/credits";

export default
function DetailedPerson() {
    const [person, setPerson] = useState({});
    const { personId } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getDetails(signal, personId)
        .then(response => {
            setPerson(response);
        })

        return () => controller.abort();
    }, [personId]);

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