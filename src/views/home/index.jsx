import Navbar from "components/navbar";
import useFetch from "hooks/useFetch";
import Hero from "./components/hero";
// import routes from 'routes/api';


export
function Home() {
    //const [ popularMovies, theresAnError, isLoading, refetch ] = useFetch();
    
    return (
        <>
            <Navbar />
            <main>
                <Hero />
            </main>
        </>
    )
}