import { MovieListContainer, MovieLink, MovieItem } from "./MovieList.styled";

const MovieList = ({movies, location}) => {
    return (
        <MovieListContainer>
                {
                    movies.map(({ id, title }) =>
                        <MovieItem key={id}>
                            <MovieLink to={`movies/${id}`} state={{ from: location }}>
                                {title}
                            </MovieLink>
                        </MovieItem>)
}
            </MovieListContainer>
    );
};

export default MovieList;