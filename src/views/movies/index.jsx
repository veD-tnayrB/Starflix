import routes from "routes/api";
import Navbar from "components/navbar";
import Footer from "components/footer";
import Section from "./components/section/Section";

import './movies.scss';

export
    function Movies() {
    return (
        <>
            <Navbar />
            <main className="movies-page">
                <Section
                    url={routes.movies.getPopular}
                    sectionTitle="Most Popular Movies"
                />

                <Section
                    url={routes.movies.getUpcoming}
                    sectionTitle="Upcoming Movies"
                />

                <Section
                    url={routes.movies.getNowPlaying}
                    sectionTitle="Now Playing Movies"
                />

                <Section
                    url={routes.movies.getTopRated}
                    sectionTitle="Top Rated Movies"
                />
            </main>
            <Footer />
        </>
    )
}