import actionTypes from "../actionTypes";
import initState from "../initState";

const questionReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_ANSWER_QUESTION:
      return {
        ...state.currentQuestion,
        isCorrect: action.isCorrect,
      };
    default:
      return state.isCorrect;
  }
};

export default questionReducer;
