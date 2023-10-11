// import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";

import Home from "pages/home/Home";
import Movie from "pages/movie/Movie";
import Movies from "pages/movies/Movies";
import Cast from "./Cast/Cast";


export const App = () => {
  return (
      <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies/>}>
          <Route path="/movies/:movieId" element={<Movie />}>
            <Route path="cast" element={<Cast/>} />
              <Route path="reviews" element={<div>Reviews Info</div>}/>
            </Route>
        </Route>
        </Route>
      </Routes>
  );

  
};
