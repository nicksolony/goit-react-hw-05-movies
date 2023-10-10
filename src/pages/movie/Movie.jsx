import { Container, MovieContainer, MovieInfo, Title, Paragraph, Overview, Genres, Image, Button, AdditionalInfo } from "./Movie.styled";
import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";


const Movie = () => {
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