import actionTypes from "../actionTypes";

const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_SCORE:
      return {
        score: action.payload,
      };
    default:
      return state;
  }
};

export default scoreReducer;
