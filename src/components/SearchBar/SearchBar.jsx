import { useSearchParams } from 'react-router-dom';
import { SearchForm,SearchButton, ButtonLabel, SearchInput } from './SearchBar.styled';



const SearchBar = () => {
    
// eslint-disable-next-line no-unused-vars
const [searchParams, setSearchParams] = useSearchParams();


const handleSubmit = (e) => {
        e.preventDefault();
        const movieId = (e.target.movie.value)
        setSearchParams({ query: movieId });
        resetSearch(e);
    };

    const resetSearch = (e) => {
        e.target.movie.value = '';
    };

    
        return (
            <SearchForm onSubmit={handleSubmit}>
                
                

                <SearchInput
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    name="movie"
                />
                <SearchButton  type="submit">
                    <ButtonLabel>Search</ButtonLabel>
                </SearchButton>
            </SearchForm>
    );
    };



export default SearchBar;