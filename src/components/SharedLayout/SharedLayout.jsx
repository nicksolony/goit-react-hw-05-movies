import { Suspense } from "react";
import { Container, NavBar, Link } from "./SharedLayout.styled";
import { Outlet } from "react-router";

const SharedLayout = () => {
    return (
        <Container>
            <NavBar>
                <Link to="/">
                    Home
                </Link>
                <Link to="/movie">
                    Movies
                </Link>
            </NavBar>
            <Suspense fallback={<div>loading...</div>}>
                <Outlet />
            </Suspense>
        </Container>
    );
};

export default SharedLayout;