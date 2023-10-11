import { Container, MovieContainer, MovieInfo, Title, Paragraph, Overview, Genres, Image, Button, AdditionalInfo } from "./Movie.styled";
import { Link, Outlet, useParams } from "react-router-dom";
import { useEffect, Suspense } from "react";
import { getMovieDetails } from "services/moviedbApi";



const Movie = () => {
    
    const { movieId } = useParams();

    useEffect(() => {
        getMovieDetails({ movieId })
        .then(movie=>console.log(movie))
    }, []);
    
    
    return (
        <Container>
            <Button> Go Back </Button>
            <MovieContainer>   
                <Image src="" alt="Movie Poster" />
                <MovieInfo>
                    <Title>Movie Title</Title>
                    <Paragraph>User score: 74%</Paragraph>
                    <Overview>Overview</Overview>
                    <Paragraph>
                        Lorem ipsum
                    </Paragraph>
                    <Genres>Genres</Genres>
                    <Paragraph> Drama, war</Paragraph>
                </MovieInfo>
            </MovieContainer>
            <AdditionalInfo>
                Additional Information
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </AdditionalInfo>
            <Suspense fallback={<div>loading...</div>}>
                <Outlet />
            </Suspense>

        </Container>
    );
};

export default Movie;