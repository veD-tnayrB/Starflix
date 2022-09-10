import { useState } from "react";
import { search } from "services/movies";
import Navbar from "components/navbar";
import Searchbar from "components/search-bar";
import List from "components/list";
import DefaultContent from "./components/default-content";
import Footer from "components/footer";

export
function Movies() {
    const [searchResults, setSearchResults] = useState({ results: [] });
    const theresSearchResults = searchResults.results.length > 0;
    console.log(theresSearchResults)

    const contentToDisplay = theresSearchResults ? <List items={searchResults.results} type="movie" /> : <DefaultContent />;
    console.log(contentToDisplay)
    return (
        <>
            <Navbar />
            <main className="movies-page">
                <Searchbar 
                 service={search}
                 setSearchResults={setSearchResults}
                />
                {contentToDisplay}
            </main>
            <Footer />
        </>
    )
}