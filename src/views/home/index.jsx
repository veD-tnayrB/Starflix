import Navbar from "components/navbar";
import Footer from "components/footer";
import Hero from "./components/hero";

import './home.scss';
import PopularMovies from "./components/sections/PopularMovies";
import PopularSeries from "./components/sections/PopularSeries";
import PopularPeople from "./components/sections/PopularPeople";
import { useMainContext } from "contexts/main";
import Loading from "components/loading";



export
function Home() {
    const { isLoading } = useMainContext();

    if (isLoading) return <Loading />;

    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <PopularMovies />
                <PopularSeries />
                <PopularPeople />
            </main>
            <Footer />
        </>
    )
}