import {
  FETCH_ALL_MOVIES,
  FETCH_FILTERED_MOVIES,
  SORT_MOVIES,
} from "../actions/MovieActions";

const initialState = { movies: [] };

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_MOVIES:
      return { ...state, movies: action.payload };
    case FETCH_FILTERED_MOVIES:
      return { ...state, movies: action.payload };
    case SORT_MOVIES:
      return { ...state, movies: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
