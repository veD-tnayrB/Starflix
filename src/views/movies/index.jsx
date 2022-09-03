import { useMainContext } from "contexts/main";
import routes from "routes/api";
import Navbar from "components/navbar";
import Footer from "components/footer";
import Section from "./components/section";
import Loading from "components/loading";

export
function Movies() {
    const { isLoading } = useMainContext();

    if (isLoading) return <Loading />;
    
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