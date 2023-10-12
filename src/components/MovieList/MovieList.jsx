import { MovieListContainer, MovieLink, MovieItem } from "./MovieList.styled";

const MovieList = ({ movies, location }) => {
    const path = location.pathname === '/' ? 'movies/': '';
    return (
        <MovieListContainer>
                {
                    movies.map(({ id, title }) =>
                        <MovieItem key={id}>
                            <MovieLink to={`${path}${id}`} state={{ from: location }}>
                                {title}
                            </MovieLink>
                        </MovieItem>)
}
            </MovieListContainer>
    );
};

export default MovieList;