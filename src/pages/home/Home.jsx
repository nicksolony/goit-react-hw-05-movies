import { useState, useEffect } from "react";

import { useLocation } from "react-router";

import MovieList from "components/MovieList/MovieList";
import { Container, Header } from "./Home.styled";

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
            <MovieList movies={movies} location={location} />

        </Container>
    );
};

export default Home;