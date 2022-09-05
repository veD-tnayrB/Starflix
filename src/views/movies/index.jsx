import { getNowPlaying, getPopular, getTopRated, getUpcoming } from "services/movies";
import Navbar from "components/navbar";
import Section from "components/section";
import Footer from "components/footer";

export
function Movies() {

    return (
        <>
            <Navbar />
            <main className="movies-page">
                <Section
                    media="movie"
                    sectionId="popular-movies"
                    sectionTitle="Most Popular Movies"
                    service={getPopular}
                />

                <Section
                    media="movie"
                    sectionId="top-rated"
                    sectionTitle="Top Rated Movies"
                    service={getTopRated}
                />

                <Section
                    media="movie"
                    sectionId="upcoming"
                    sectionTitle="Upcoming Movies"
                    service={getUpcoming}
                />

                <Section
                    media="movie"
                    sectionId="now-playing"
                    sectionTitle="Now Playing Movies"
                    service={getNowPlaying}
                />
                {/* <Section
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
                /> */}
            </main>
            <Footer />
        </>
    )
}