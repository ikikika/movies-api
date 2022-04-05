import axios from "axios";

export const FETCH_ALL_MOVIES = "fetch_all_movies";
export const FETCH_FILTERED_MOVIES = "movies_filter_text";
export const SORT_MOVIES = "sort_movies";
export const FETCH_SINGLE_MOVIE = "fetch_single_movie";
export const LOADING_TRUE = "loading_true";

const errorMessgae =
  "There was a problem with the server. Please try again later.";

export const fetchAllMovies = () => async (dispatch) => {
  const response = await axios
    .get(process.env.REACT_APP_API_URL)
    .catch((err) => err);
  dispatch({
    type: FETCH_ALL_MOVIES,
    payload: {
      movieList: response.status === 200 ? response.data : [],
      message: response.status !== 200 ? errorMessgae : "",
    },
  });
};

export const fetchFilteredMovies = (filterText) => async (dispatch) => {
  const response = await axios
    .get(`${process.env.REACT_APP_API_URL}?search=${filterText}`)
    .catch((err) => err);
  dispatch({
    type: FETCH_FILTERED_MOVIES,
    payload: {
      movieList: response.status === 200 ? response.data : [],
      message: response.status !== 200 ? errorMessgae : "",
    },
  });
};

export const sortMovies = (sortSelection) => (dispatch, getState) => {
  const { movies } = getState().moviesState;
  let sortedMovies = [];

  if (sortSelection === "year_desc") {
    sortedMovies = [...movies].sort((a, b) => {
      return b.releaseYear > a.releaseYear ? 1 : -1;
    });
  } else if (sortSelection === "year_asc") {
    sortedMovies = [...movies].sort((a, b) => {
      return b.releaseYear < a.releaseYear ? 1 : -1;
    });
  } else if (sortSelection === "title_desc") {
    sortedMovies = [...movies].sort((a, b) => {
      return b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1;
    });
  } else if (sortSelection === "title_asc") {
    sortedMovies = [...movies].sort((a, b) => {
      return b.title.toLowerCase() < a.title.toLowerCase() ? 1 : -1;
    });
  } else {
    sortedMovies = movies;
  }

  dispatch({
    type: SORT_MOVIES,
    payload: sortedMovies,
  });
};

export const fetchSingleMovie = (movieId) => async (dispatch) => {
  const response = await axios
    .get(`${process.env.REACT_APP_API_URL + movieId}/`)
    .catch((err) => err);
  dispatch({
    type: FETCH_SINGLE_MOVIE,
    payload: {
      movie: response.status === 200 ? response.data : {},
      message: response.status !== 200 ? errorMessgae : "",
    },
  });
};

export const setLoadingToTrue = () => async (dispatch) => {
  dispatch({
    type: LOADING_TRUE,
  });
};
