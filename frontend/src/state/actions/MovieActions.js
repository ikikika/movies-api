import axios from "axios";

export const FETCH_ALL_MOVIES = "fetch_all_movies";
export const FETCH_FILTERED_MOVIES = "movies_filter_text";
export const SORT_MOVIES = "sort_movies";

export const fetchAllMovies = () => async (dispatch) => {
  const response = await axios.get(process.env.REACT_APP_API_URL);
  dispatch({
    type: FETCH_ALL_MOVIES,
    payload: response.data,
  });
};

export const fetchFilteredMovies = (filterText) => async (dispatch) => {
  //   console.log(filterText);
  const response = await axios.get(
    `${process.env.REACT_APP_API_URL}?search=${filterText}`
  );
  dispatch({
    type: FETCH_FILTERED_MOVIES,
    payload: response.data,
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
