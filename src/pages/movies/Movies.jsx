import SearchBar  from "components/SearchBar/SearchBar";
import { useSearchParams, useLocation } from "react-router-dom";
import { searchMovie } from "services/moviedbApi";
import { useEffect,useState } from "react";
import MovieList from "components/MovieList/MovieList";




const Movies = () => {

    const [params] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    
    const query = params.get('query')

useEffect(() => {
    if (query) {
     searchMovie({ query })
    .then(movies=>setMovies(movies))   
    }
}, [query]);

    return (
        <div>
            <SearchBar />
            <MovieList movies={movies} location={location}/>
        </div>
    );


};

export default Movies;