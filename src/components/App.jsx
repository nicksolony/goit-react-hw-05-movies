import { lazy } from 'react';
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout/SharedLayout";

const Home = lazy(()=>import('../pages/home/Home'));
const Movies = lazy(() => import('../pages/movies/Movies'));
const Movie = lazy(() => import('../pages/movie/Movie'));
const Cast = lazy(()=> import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));


export const App = () => {
  return (
      <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies/>}/>
        <Route path="movies/:movieId" element={<Movie />}>
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>}/>
        </Route>
      </Route>
      </Routes>
  );

  
};
