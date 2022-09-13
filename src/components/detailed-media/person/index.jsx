import { useParams } from "react-router-dom";
import Footer from "components/footer";
import Navbar from "components/navbar";
import { useEffect } from "react";
import { getDetails } from "services/people";
import { useState } from "react";

export default
function DetailedPerson() {
    const [person, setPerson] = useState({});
    const { personId } = useParams();

    useEffect(() => {
        getDetails()
        .then(response => {
            setPerson(response);
        })
    }, []);

    return (
        <>
            <Navbar />
            <main className="detailed-page">

            </main>
            <Footer />
        </>
    )
}