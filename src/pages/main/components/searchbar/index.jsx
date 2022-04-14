import React, { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import Input from 'components/input';

import './searchbar.scss';

const SearchBar = ({ type, makeFetchTo, results }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setSearchValue(value);
    }

    const search = async (event) => {
        event.preventDefault();
        const resultValue = await makeFetchTo(searchValue);
        results(resultValue);
    }

    return (
        <section className="search-section">
            <form onSubmit={search}>
                <Input 
                 value={searchValue}
                 onChange={handleChange}
                 isCorrect={searchValue.length >= 1}
                 errorMessage="The search couldnt be empty" // placeholder
                 input={{
                     name: 'search',
                     placeholder: `Search ${type}`
                 }}
                />

                <button className="main-button">
                    <SearchIcon className="search-icon" />
                </button>
            </form>
        </section>
    )
}

export default SearchBar;