import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "services/moviedbApi";
import { CastMember, Image, Info } from "./Cast.styled";


const Cast = () => {

    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        getMovieCast({ movieId })
        .then(cast=>setCast(cast))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
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

export default Cast;