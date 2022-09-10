import Footer from "components/footer";
import Navbar from "components/navbar";
import Searchbar from "components/search-bar";
import Section from "components/section";
import { getPopular, search } from "services/people";

export
    function People() {

    return (
        <>
            <Navbar />
            <main className="people-page">
                <Searchbar 
                    service={search}
                />

                <Section
                    type="person"
                    sectionId="popular-people"
                    sectionTitle="Most Popular People"
                    service={getPopular}
                />
            </main>
            <Footer />
        </>
    )
}