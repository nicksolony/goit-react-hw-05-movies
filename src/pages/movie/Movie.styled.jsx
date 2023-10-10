import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
export const MovieContainer = styled.div`
    display: flex;
    gap: 20px;
    border-bottom: 1px solid #000000;
    padding-bottom: 15px;
    margin-bottom: 15px;
`;

export const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    gap:15px;
`;

export const Image = styled.img`
    margin: 0px;
`;

export const Title = styled.h4`
    margin:0px;
`;

export const Overview = styled.h5`
    margin:0px;
    font-size: 24px;
`;

export const Genres = styled.h6`
    margin:0px;
    font-size:20px;
`;

export const Paragraph = styled.p`
    font-size: 18px;
    margin:0;
`;

export const Button = styled.button`
    margin: 5px;
    width: 70px;
`;

export const AdditionalInfo = styled.div`
    font-size:18px;
    border-bottom: 1px solid #000000;    
`