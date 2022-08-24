import routes from "routes/api";
import Navbar from "components/navbar";
import Footer from "components/footer";
import Section from "./components/section";

export
function Movies() {
    return (
        <>
            <Navbar />
            <main className="movies-page">
                <Section
                    sectionId="popular"
                    url={routes.movies.getPopular}
                    sectionTitle="Most Popular Movies"
                />

                <Section
                    sectionId="upcoming"
                    url={routes.movies.getUpcoming}
                    sectionTitle="Upcoming Movies"
                />

                <Section
                    sectionId="now-playing"
                    url={routes.movies.getNowPlaying}
                    sectionTitle="Now Playing Movies"
                />

                <Section
                    sectionId="top-rated"
                    url={routes.movies.getTopRated}
                    sectionTitle="Top Rated Movies"
                />
            </main>
            <Footer />
        </>
    )
}