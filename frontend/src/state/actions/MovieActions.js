import axios from "axios";

export const FETCH_MOVIES = "load_movies";

export const fetchMovies = () => async (dispatch) => {
  const response = await axios.get(process.env.REACT_APP_API_URL);

  dispatch({
    type: FETCH_MOVIES,
    payload: response.data,
  });
};
