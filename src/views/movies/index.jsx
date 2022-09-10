import { useState } from "react";
import { search } from "services/movies";
import Navbar from "components/navbar";
import Searchbar from "components/search-bar";
import DefaultContent from "./components/default-content";
import Footer from "components/footer";
import SearchResult from "components/search-result";

export
function Movies() {
    const [searchResults, setSearchResults] = useState({ results: [] });
    const theresSearchResults = searchResults.results.length > 0;

    const contentToDisplay = theresSearchResults ? 
    <SearchResult
    searchResults={searchResults} 
    type="movie" 
    /> : 
    <DefaultContent />;
    
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