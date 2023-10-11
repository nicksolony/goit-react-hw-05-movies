import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
    padding-top: 20px;
`;

export const Header = styled.h3`
`;

export const MovieList = styled.ul`
    font-size: 20px;
`;

export const MovieItem = styled.li`
`;

export const MovieLink = styled(Link)`
    &:visited {
        color:LinkText;
    }
`