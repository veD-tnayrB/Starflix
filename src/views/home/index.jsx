import { getPopular as getPopularMovies } from 'services/movies';
import { getPopular as getPopularSeries } from 'services/series';
import { getPopular as getPopularPeople } from 'services/people';
import Navbar from "components/navbar";
import Footer from "components/footer";
import Hero from "./components/hero";
import Section from "components/section";

import './home.scss';

export
function Home() {

    return (
        <>
            <Navbar />
            <main>
                <section className="hero-section">
                    <Hero />
                </section>
                <Section
                    type="movie"
                    sectionId="popular-movies"
                    sectionTitle="Popular Movies"
                    isLimitedSection={true}
                    service={getPopularMovies}
                />

                <Section
                    type="serie"
                    sectionId="popular-movies"
                    sectionTitle="Popular Movies"
                    isLimitedSection={true}
                    service={getPopularSeries}
                />

                <Section
                    type="person"
                    sectionId="popular-movies"
                    sectionTitle="Popular Movies"
                    isLimitedSection={true}
                    service={getPopularPeople}
                />
            </main>
            <Footer />
        </>
    )
}