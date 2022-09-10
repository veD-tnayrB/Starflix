import { useState } from "react";
import SearchButton from "./SearchButton";

import './search-bar.scss';

export default
function Searchbar({ service, setSearchResults }) {
    const [isLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    function handleChanges(event) {
        const { value } = event.target;
        setSearchValue(value);
    }

    function search(event) {
        event.preventDefault();
        if (searchValue === '') return setSearchResults({ results: [] });

        setIsLoading(true);

        service(searchValue)
        .then(response => {
            setSearchResults(response);
            setIsLoading(false);
        })
    }

    return (
            <form
                className="search-bar" 
                onSubmit={search}
            >
                <input 
                 value={searchValue}
                 onChange={handleChanges}
                 placeholder="Search..."
                />

                <SearchButton 
                 isLoading={isLoading} 
                />
            </form>
    )
}