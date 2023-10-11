import { Container } from "./Home.styled";
import { getTrendingMovies } from "services/moviedbApi";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies()
            .then(movies => setMovies(movies));
        }
        , []);
    

    return (
        <Container>
            <h2>
                Trending Today
            </h2>
            <ul>
                {
                    movies.map(({ id, title }) =>
                        <li>
                            <Link to={`${id}`}>
                                {title}
                            </Link>
                        </li>)
}
            </ul>

        </Container>
    );
};

export default Home;