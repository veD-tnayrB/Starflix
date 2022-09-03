import { useMainContext } from "contexts/main";
import Footer from "components/footer";
import Navbar from "components/navbar";
import routes from "routes/api";
import Section from "./components/section";
import Loading from "components/loading";

export
function Series() {
    const { isLoading } = useMainContext();

    if (isLoading) return <Loading />;

    return (
        <>
            <Navbar />
            <main className="series-page">
                <Section
                    sectionId="popular"
                    url={routes.series.getPopular}
                    sectionTitle="Most Popular Series"
                />

                <Section
                    sectionId="on-the-air"
                    url={routes.series.getOnTheAir}
                    sectionTitle="On The Air"
                />

                <Section
                    sectionId="top-rated"
                    url={routes.series.getTopRated}
                    sectionTitle="Top Rated Series"
                />

                <Section
                    sectionId="airing-today"
                    url={routes.series.getAiring}
                    sectionTitle="Airing Today"
                />
            </main>
            <Footer />
        </>
    )
}