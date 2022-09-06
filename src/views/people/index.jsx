import Footer from "components/footer";
import Navbar from "components/navbar";
import Section from "components/section";
import { getPopular } from "services/people";

export
    function People() {

    return (
        <>
            <Navbar />
            <main className="people-page">
                <Section
                    media="person"
                    sectionId="popular-people"
                    sectionTitle="Most Popular People"
                    service={getPopular}
                />
            </main>
            <Footer />
        </>
    )
}