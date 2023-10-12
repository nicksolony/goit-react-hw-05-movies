import axios from 'axios';

let API_KEY = '5ec89972fbd16ce191e81c5a975c5c1a';
// let ACCESS_TOKEN='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZWM4OTk3MmZiZDE2Y2UxOTFlODFjNWE5NzVjNWMxYSIsInN1YiI6IjY1MjQ2NzMzYWI1ZTM0MDBhYmU1MzlkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZQbX6F4v3SbAKjJvYBMARMRhpWAGkzIQ5fDUxfxc-b0'
let BASE_URL = 'https://api.themoviedb.org/3/';
// let IMAGE_TYPE = 'photo';
// let ORIENT = 'horizontal';
// let SAFE_SEARCH = 'true';
// let PER_PAGE = 12;


export const getTrendingMovies = () => {
    // https://api.themoviedb.org/3/trending/movie/day?api_key=5ec89972fbd16ce191e81c5a975c5c1a

  return axios
    .get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`,
    )
    .then(response => {return response.data.results});
};

export const getMovieDetails = ({ movieId }) => {
    return axios
        .get(
            `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`,
    )
    .then(response => {return response.data});
};

export const searchMovie = ({ movieId }) => {
    return axios
        .get(
            `${BASE_URL}search/movie?query=${movieId}&api_key=${API_KEY}`,
    )
    .then(response => {return response.data});
};

export const getMovieCast = ({ movieId }) => {
    return axios
        .get(
            `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`,
    )
    .then(response => {return response.data.cast});
};

export const getMovieReviews = ({ movieId }) => {
    return axios
        .get(
            `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`,
    )
    .then(response => {return response.data.results});
};


