import initialState from "./initialState";
import actionType from "./actionType";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.HANDLE_ANSWER_QUESTION:
      return {
        ...state,
      };
    case actionType.HANDLE_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case actionType.HANDLE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    case actionType.HANDLE_QUIZ_STATE:
      return {
        ...state,
        quizState: action.payload,
      };
    default:
      break;
  }
};

export default rootReducer;
