import actionTypes from "../actionTypes";

const handleScore = (payload) => {
  return {
    type: actionTypes.HANDLE_SCORE,
    payload,
  };
};

export default handleScore;
