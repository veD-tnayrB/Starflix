import { useMainContext } from "contexts/main";
import Footer from "components/footer";
import Navbar from "components/navbar";
import routes from "routes/api";
import Section from "./components/section";
import Loading from "components/loading";

export
function People() {
    const { isLoading } = useMainContext();

    if (isLoading) return <Loading />;

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