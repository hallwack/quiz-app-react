import actionTypes from "../actionTypes";
import initState from "../initState";

const questionReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_QUESTION:
      return {
        ...state,
        question: state.question,
      };
    default:
      return state;
  }
};

export default questionReducer;
