import Footer from "components/footer";
import Navbar from "components/navbar";
import routes from "routes/api";
import Section from "./components/section";

export
function Series() {
    return (
        <>
            <Navbar />
            <main className="series-page">
                <Section
                    sectionId="popular"
                    url={routes.series.getPopular}
                    sectionTitle="Most Popular Movies"
                />

                <Section
                    sectionId="upcoming"
                    url={routes.series.getUpcoming}
                    sectionTitle="Upcoming Movies"
                />

                <Section
                    sectionId="now-playing"
                    url={routes.series.getNowPlaying}
                    sectionTitle="Now Playing Movies"
                />

                <Section
                    sectionId="top-rated"
                    url={routes.series.getTopRated}
                    sectionTitle="Top Rated Movies"
                />
            </main>
            <Footer />
        </>
    )
}