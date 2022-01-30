import initialState from "../initialState";
import actionType from "../actionType";

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.HANDLE_QUIZ_STATE:
      return {
        ...state,
        quizState: action.payload,
      };

    default:
      return state;
  }
};

export default quizReducer;
