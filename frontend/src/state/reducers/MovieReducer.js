import { LOAD_ALL_MOVIES } from "../actions/MovieActions";

const initialState = [1, 2];

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_MOVIES:
      return state;
    default:
      return state;
  }
};

export default movieReducer;
