import { Container, MovieContainer, MovieInfo, Title, Paragraph, Overview, Genres, Image, Button, AdditionalInfo, BackLink} from "./Movie.styled";
import { Link, Outlet, useParams, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense, useRef } from "react";
import { getMovieDetails } from "services/moviedbApi";



const Movie = () => {
    
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

    const { movieId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        getMovieDetails({ movieId })
        .then(movie=>setMovie(movie))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const { title, vote_average = 0, overview, genres = [],poster_path} = movie;
    
    const imgSrc = `https://image.tmdb.org/t/p/original/${poster_path}`;

    const genresList = genres.map((genre) =>  genre.name).join(' ');
    
    return (
        <Container>
            <Button><BackLink to={backLinkLocationRef.current}>Go Back</BackLink></Button>
            <MovieContainer>   
                {poster_path && <Image src={imgSrc} alt="Movie Poster" />}
                <MovieInfo>
                    <Title>{title}</Title>
                    <Paragraph>User score: {vote_average.toFixed(1)*10}%</Paragraph>
                    <Overview>Overview</Overview>
                    <Paragraph>
                        {overview}
                    </Paragraph>
                    <Genres>Genres</Genres>
                    <Paragraph> {genresList}</Paragraph>
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