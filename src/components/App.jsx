// import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";

import Home from "pages/home/Home";
import Movie from "pages/movie/Movie";


export const App = () => {
  return (
      <Routes>
      <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Movie/>}>

          </Route>
        </Route>
      </Routes>
  );

  
};
