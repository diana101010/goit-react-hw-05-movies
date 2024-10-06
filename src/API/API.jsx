import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '97f4d0557044d1f4f3103de6287cf5f7';

export const fetchTrending = async () => {
  try {
    const res = await axios.get(`trending/all/day?api_key=${API_KEY}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching trending:', error);
    throw error; // Re-throw the error after logging
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const res = await axios.get(`movie/${movieId}?api_key=${API_KEY}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const res = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    throw error;
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const res = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};

export const fetchSearchMovies = async query => {
  try {
    const res = await axios.get(
      `search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
    );
    return res.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};
