import SearchIcon from '@mui/icons-material/Search';
import Input from 'components/input';

import useForm from 'hooks/useForm';

import './searchbar.scss';


const SearchBar = ({ type, onSubmit }) => {
    const form = useForm({ search: '' });


    const search = (event) => {
        event.preventDefault();

        onSubmit(form.info.search);
    }


    return (
        <section className="search-section">
            <form onSubmit={search}>
                <Input 
                 value={form.info.search}
                 onChange={form.handleChange}
                 isCorrect={form.info.search.length >= 1}
                 errorMessage="The search couldnt be empty"
                 input={{
                     type: "text",
                     name: "search",
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