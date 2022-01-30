import { combineReducers } from "redux";
import quizReducer from "./quizReducer";

const rootReducers = combineReducers({
  quiz: quizReducer,
});

export default rootReducers;
