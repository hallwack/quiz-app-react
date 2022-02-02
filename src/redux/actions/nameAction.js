import actionTypes from "../actionTypes";

const handleName = (payload) => {
  return {
    type: actionTypes.HANDLE_NAME,
    payload,
  };
};

export default handleName;
