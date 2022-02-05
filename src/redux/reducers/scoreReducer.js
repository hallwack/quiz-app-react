import actionTypes from "../actionTypes";

const scoreReducer = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.HANDLE_SCORE:
      return state + 1;
    default:
      return state;
  }
};

export default scoreReducer;
