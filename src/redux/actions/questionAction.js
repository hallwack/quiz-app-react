import actionTypes from "../actionTypes";

const handleQuestion = (payload) => {
  return {
    type: actionTypes.HANDLE_QUESTION,
    payload,
  };
};

export default handleQuestion;
