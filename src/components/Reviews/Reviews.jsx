import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/moviedbApi";
import { Review, Author, Content } from "./Reviews.styled";


export const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        setLoading(true);
        getMovieReviews({ movieId })
            .then(reviews => setReviews(reviews))
            .finally(()=>setLoading(false))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


        return (
            <div>
                {loading && <p>Loading...</p>}
                {!loading && reviews.length === 0 && <div>We don't have any reviews for this movie.</div>}
                {reviews.length !== 0 &&
                    <ul>
                        {reviews.map((review) => {
                            const { author, content, id } = review;
                            return <Review key={id}>
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
            
            </div>
        
        );
    };
