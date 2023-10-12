import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/moviedbApi";
import { Review, Author, Content } from "./Reviews.styled";


const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieReviews({ movieId })
        .then(reviews=>setReviews(reviews))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {reviews.length !== 0 && 
            <ul>
                    {reviews.map((review) => {
                    const { author, content, id } = review;
                    return<Review key={id}>
                        <Author>
                            Author: {author}
                        </Author>
                        <Content>
                            {content}
                        </Content>
                    </Review>
                })}    
                </ul>
            }
            {reviews.length ===0 && <div>We don't have any reviews for this movie.</div>}
        </div>
        
    );
};

export default Reviews;