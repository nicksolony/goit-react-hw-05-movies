import SearchBar  from "components/SearchBar/SearchBar";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "services/moviedbApi";
import { useEffect } from "react";




const Movies = () => {

    const [params] = useSearchParams();
    
    const query = params.get('query')

useEffect(() => {
    if (query) {
     searchMovie({ query })
    .then(movies=>console.log(movies))   
    }
}, [query]);

    return (
        <div>
            <SearchBar/>
        </div>
    );


};

export default Movies;