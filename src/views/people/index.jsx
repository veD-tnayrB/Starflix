import { useState } from "react";
import { search } from "services/people";
import Navbar from "components/navbar";
import Searchbar from "components/search-bar";
import SearchResult from "components/search-result";
import Footer from "components/footer";
import DefaultContent from "./components/default-content";

export
function People() {
    const [searchResults, setSearchResults] = useState({ results: [] });
    const theresSearchResults = searchResults.results.length > 0;

    const contentToDisplay = theresSearchResults ? 
    <SearchResult
    searchResults={searchResults} 
    type="person" 
    /> : 
    <DefaultContent />;

    return (
        <>
            <Navbar />
            <main className="people-page">
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