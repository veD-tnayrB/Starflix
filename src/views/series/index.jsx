import { useState } from "react";
import { search } from "services/series";
import Navbar from "components/navbar";
import Searchbar from "components/search-bar";
import SearchResult from "components/search-result";
import DefaultContent from "./components/default-content";
import Footer from "components/footer";

export
function Series() {
    const [searchResults, setSearchResults] = useState({ results: [] });
    const theresSearchResults = searchResults.results.length > 0;

    const contentToDisplay = theresSearchResults ?
        <SearchResult
            searchResults={searchResults}
            type="serie"
        /> :
        <DefaultContent />;

    return (
        <>
            <Navbar />
            <main className="series-page">
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