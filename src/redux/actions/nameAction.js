import actionTypes from "../actionTypes";

const handleName = (value) => {
  return {
    type: actionTypes.HANDLE_NAME,
    payload: value,
  };
};

const handleSubmit = (payload) => {
  return {
    type: actionTypes.HANDLE_NAME,
    payload,
  };
};

export { handleName, handleSubmit };
