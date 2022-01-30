import actionType from "../actionType";

const handleQuizState = (quizState) => {
  return {
    type: actionType.HANDLE_QUIZ_STATE,
    payload: quizState,
  };
};

export default handleQuizState;
