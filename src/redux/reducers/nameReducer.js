import actionTypes from "../actionTypes";

const nameReducer = (state = "", action) => {
  switch (action.type) {
    case actionTypes.HANDLE_NAME:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return state;
  }
};

export default nameReducer;
