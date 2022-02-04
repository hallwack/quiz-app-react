import actionTypes from "../actionTypes";

const handleAnswerQuestion = (isCorrect) => {
  return {
    type: actionTypes.HANDLE_ANSWER_QUESTION,
    isCorrect,
  };
};

const handleCurrentQuestion = (currentQuestion) => {
  return {
    type: actionTypes.HANDLE_CURRENT_QUESTION,
    currentQuestion,
  };
};

export { handleAnswerQuestion, handleCurrentQuestion };
