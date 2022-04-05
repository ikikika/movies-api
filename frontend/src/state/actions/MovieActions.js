export const LOAD_ALL_MOVIES = "load_movies";

export const loadAllMovies = () => {
  return (dispatch) => {
    dispatch({
      type: LOAD_ALL_MOVIES,
    });
  };
};
