import { useState, useEffect } from "react";

import { useLocation } from "react-router";

import { Container, Header, MovieItem, MovieLink, MovieList } from "./Home.styled";

import { getTrendingMovies } from "services/moviedbApi";

const Home = () => {

    const [movies, setMovies] = useState([]);
    const location = useLocation();

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
                        <MovieItem key={id}>
                            <MovieLink to={`movies/${id}`} state={{ from: location }}>
                                {title}
                            </MovieLink>
                        </MovieItem>)
}
            </MovieList>

        </Container>
    );
};

export default Home;