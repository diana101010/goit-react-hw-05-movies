import axios from 'axios';

const KEY = '97f4d0557044d1f4f3103de6287cf5f7';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: KEY };

export async function fetchTrending() {
  const response = await axios.get('trending/movie/day');
  return response.data.results;
}
export async function fetchSearchMovieByWord(query) {
  const response = await axios(
    `search/movie?query=${query}&include_adult=false&language=en-US&page=1`
  );
  return response.data.results;
}
export async function fetchMovieDetails(movie_id) {
  const response = await axios(`movie/${movie_id}?language=en-US`);
  return response.data;
}

export async function fetchMovieCast(movie_id) {
  const response = await axios(`movie/${movie_id}/credits?language=en-US`);
  return response.data.cast;
}
export async function fetchMovieReviews(movie_id) {
  const response = await axios(
    `movie/${movie_id}/reviews?language=en-US&page=1`
  );
  return response.data.results;
}
