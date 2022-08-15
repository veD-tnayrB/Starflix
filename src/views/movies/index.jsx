import Navbar from "components/navbar";
import Footer from "components/footer";
import TopRatedMovies from "./components/sections/TopRated";
import './movies.scss';

export
function Movies() {

    return (
        <>
            <Navbar />
            <main className="movies-page">
                <TopRatedMovies />
            </main>
            <Footer />
        </>
    )
}