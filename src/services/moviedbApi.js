import axios from 'axios';

let API_KEY = '5ec89972fbd16ce191e81c5a975c5c1a';
let BASE_URL = 'https://api.themoviedb.org/3/';
let METHOD: 'GEYT'
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


// export const getTrendingMovies = ({ searchQuery = '', currentPage = 1}) => {
//   return axios
//     .get(
//       `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&image_type=${IMAGE_TYPE}&orientation=${ORIENT}&safesearch=${SAFE_SEARCH}&per_page=${PER_PAGE}&page=${currentPage}`,
//     )
//     .then(response => {return response.data.hits});
// };