import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Header, MovieItem, MovieLink, MovieList } from "./Home.styled";

import { getTrendingMovies } from "services/moviedbApi";

const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrendingMovies()
            .then(movies => setMovies(movies));
        }
        , []);
    

    return (
        <Container>
            <Header>
                Trending Today
            </Header>
            <MovieList>
                {
                    movies.map(({ id, title }) =>
                        <MovieItem>
                            <MovieLink to={`movies/${id}`}>
                                {title}
                            </MovieLink>
                        </MovieItem>)
}
            </MovieList>

        </Container>
    );
};

export default Home;