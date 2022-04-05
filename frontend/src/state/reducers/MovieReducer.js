import {
  FETCH_ALL_MOVIES,
  FETCH_FILTERED_MOVIES,
  SORT_MOVIES,
  FETCH_SINGLE_MOVIE,
  LOADING_TRUE,
} from "../actions/MovieActions";

const initialState = { loading: true, movies: [], movie: {}, message: "" };

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_MOVIES:
      return {
        ...state,
        movies: action.payload.movieList,
        message: action.payload.message,
        loading: false,
      };
    case FETCH_FILTERED_MOVIES:
      return {
        ...state,
        movies: action.payload.movieList,
        message: action.payload.message,
        loading: false,
      };
    case SORT_MOVIES:
      return { ...state, movies: action.payload };
    case FETCH_SINGLE_MOVIE:
      return {
        ...state,
        movie: action.payload.movie,
        message: action.payload.message,
        loading: false,
      };
    case LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default movieReducer;
