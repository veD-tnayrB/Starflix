import { getNowPlaying, getPopular, getTopRated, getUpcoming, search } from "services/movies";
import Navbar from "components/navbar";
import Section from "components/section";
import Footer from "components/footer";
import Searchbar from "components/search-bar";

export
function Movies() {

    return (
        <>
            <Navbar />
            <main className="movies-page">
                <Searchbar 
                 service={search}
                />

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
            </main>
            <Footer />
        </>
    )
}