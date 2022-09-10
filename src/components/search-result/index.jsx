import List from "components/list";

import './search-result.scss';

export default
function SearchResult({ searchResults, type }) {

    return (
        <section className="search-results">
            <div className="title-container">
                <h3>Search Results:</h3>
            </div>

            <List items={searchResults.results} type={type} />
        </section>
    )
}