import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MovieListContainer = styled.ul`
    font-size: 20px;
`;

export const MovieItem = styled.li`
`;

export const MovieLink = styled(Link)`
    &:visited {
        color:LinkText;
    }
`