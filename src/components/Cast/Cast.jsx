import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "services/moviedbApi";
import { CastMember, Image, Info } from "./Cast.styled";


export const Cast = () => {

    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        setLoading(true);
        getMovieCast({ movieId })
            .then(cast => {setCast(cast)})
            .finally(()=>setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {cast.length !== 0 && 
            <ul>
                {cast.map((castMember) => {
                    const { id, name, character, profile_path } = castMember;
                    const imgSrc = `https://image.tmdb.org/t/p/original${profile_path}`;
                    return<CastMember key={id}>
                    {profile_path && <Image src={imgSrc} alt={name} />}
                    <Info>{name}</Info>
                    <Info>Character: { character}</Info>
                    </CastMember>
                })}    
                </ul>
            }
        </div>
        
    );
};

    