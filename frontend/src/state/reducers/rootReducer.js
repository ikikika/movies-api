import { combineReducers } from "redux";
import movieReducer from "./MovieReducer";

const rootReducer = combineReducers({ moviesState: movieReducer });

export default rootReducer;
