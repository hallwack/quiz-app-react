import { combineReducers } from "redux";
import nameReducer from "./nameReducer";
import scoreReducer from "./scoreReducer";

const rootReducer = combineReducers({
  name: nameReducer,
  score: scoreReducer,
});

export default rootReducer;
