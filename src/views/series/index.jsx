import { getAiring, getOnTheAir, getPopular, getTopRated, search } from "services/series";
import Footer from "components/footer";
import Navbar from "components/navbar";
import Loading from "components/loading";
import Section from "components/section";
import Searchbar from "components/search-bar";

export
function Series() {

    return (
        <>
            <Navbar />
            <main className="series-page">
                <Searchbar 
                    service={search}
                />

                <Section
                    type="serie"
                    sectionId="popular-series"
                    sectionTitle="Most Popular Series"
                    service={getPopular}
                />

                <Section
                    type="serie"
                    sectionId="on-the-air"
                    sectionTitle="On The Air"
                    service={getOnTheAir}
                />

                <Section
                    type="serie"
                    sectionId="top-rated"
                    sectionTitle="Top Rated Series"
                    service={getTopRated}
                />

                <Section
                    type="serie"
                    sectionId="airing"
                    sectionTitle="Airing"
                    service={getAiring}
                />
            </main>
            <Footer />
        </>
    )
}