import { getAiring, getOnTheAir, getPopular, getTopRated } from "services/series";
import Footer from "components/footer";
import Navbar from "components/navbar";
import Loading from "components/loading";
import Section from "components/section";

export
function Series() {

    return (
        <>
            <Navbar />
            <main className="series-page">
                <Section
                    media="serie"
                    sectionId="popular-series"
                    sectionTitle="Most Popular Series"
                    service={getPopular}
                />

                <Section
                    media="serie"
                    sectionId="on-the-air"
                    sectionTitle="On The Air"
                    service={getOnTheAir}
                />

                <Section
                    media="serie"
                    sectionId="top-rated"
                    sectionTitle="Top Rated Series"
                    service={getTopRated}
                />

                <Section
                    media="serie"
                    sectionId="airing"
                    sectionTitle="Airing"
                    service={getAiring}
                />
            </main>
            <Footer />
        </>
    )
}