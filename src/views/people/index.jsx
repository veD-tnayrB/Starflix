import Footer from "components/footer";
import Navbar from "components/navbar";
import routes from "routes/api";
import Section from "./components/section";

export
function People() {

    return (
        <>
            <Navbar />
            <main> 
                <Section 
                    sectionId="popular"
                    sectionTitle="Most Popular People"
                    url={routes.people.getPopular}
                />
            </main>
            <Footer />
        </>
    )
}