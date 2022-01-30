import actionType from "./actionType";

const handleAnswerQuestion = (payload) => ({
  type: actionType.HANDLE_ANSWER_QUESTION,
  payload,
});

const handleChangeName = (payload) => ({
  type: actionType.HANDLE_NAME,
  payload,
});

const handleChangeScore = (payload) => ({
  type: actionType.HANDLE_SCORE,
  payload,
});

const handleQuizState = (payload) => ({
  type: actionType.HANDLE_QUIZ_STATE,
  payload,
});

export default {
  handleAnswerQuestion,
  handleChangeName,
  handleChangeScore,
  handleQuizState,
};

