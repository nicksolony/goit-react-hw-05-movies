import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import SearchBar  from "components/SearchBar/SearchBar";


const Movies = () => {

    return (
        <div>
        <SearchBar/>
        <Suspense fallback={<div>loading...</div>}>
            <Outlet />
        </Suspense>
            </div>
    );


};

export default Movies;