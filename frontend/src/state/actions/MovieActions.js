import axios from "axios";

export const FETCH_ALL_MOVIES = "fetch_all_movies";
export const FETCH_FILTERED_MOVIES = "movies_filter_text";

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
    type: FETCH_ALL_MOVIES,
    payload: response.data,
  });
};
