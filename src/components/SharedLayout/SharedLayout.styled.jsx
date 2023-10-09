import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: start;
    font-size: 40px;
    color: '#010101';
    margin-left:20px;
    margin-right: 20px;
`;

export const NavBar = styled.nav`
    padding: 16px 0px;
    box-shadow: 0px 2px 1px #808080;
    width: 100%;
    display: flex;
    align-items: start;
`;

export const Link = styled(NavLink)`
    padding: 8px 16px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    border-radius: 10px;

     &.active {
    color: #FFFFFF;
    background-color: #FFA500;
  }
`;



