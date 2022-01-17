import React, { useState } from "react";
import questionData from "../model/questionData";

export const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion == 0) {
      setCurrentQuestion(0);
    }

    setCurrentQuestion(currentQuestion - 1);
  };

  const handleAnswerQuestion = (isCorrect) => {
    if (isCorrect) {
      setScore((score + 1) * 10);
    }

    if (currentQuestion + 1 < questionData.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-slate-100 text-2xl font-medium">
        Question {currentQuestion + 1}/4
      </h1>
      <div className="my-4 space-y-2">
        <p className="text-slate-100 text-lg">
          {questionData[currentQuestion].questionText}
        </p>
        <div className="flex flex-col items-start space-y-4">
          {questionData[currentQuestion].answer.map((answerOption) => (
            <button
              className="py-2 px-3 bg-blue-300 rounded-md text-slate-800 shadow-md"
              key={answerOption.answerText}
              onClick={handleAnswerQuestion}
            >
              {answerOption.answerText}
            </button>
          ))}
        </div>
      </div>
      {/* <div className="flex space-x-2 items-center justify-center">
        <button className="py-2 px-4 shadow-md bg-blue-200 rounded-md text-slate-800">
          1
        </button>
        <button className="py-2 px-4 shadow-md bg-sky-400 rounded-md text-slate-800">
          2
        </button>
        <button className="py-2 px-4 shadow-md bg-slate-800 rounded-md text-slate-100">
          3
        </button>
        <button className="py-2 px-4 shadow-md bg-blue-200 rounded-md text-slate-800">
          4
        </button>
      </div> */}
      <div className="flex justify-end mt-6 mb-2 space-x-2">
        <button
          className="px-3 py-2 bg-blue-400 rounded-md text-slate-800"
          onClick={handlePreviousQuestion}
        >
          Previous Question
        </button>
        <button
          className="px-3 py-2 bg-blue-400 rounded-md text-slate-800"
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
        <button className="px-3 py-2 bg-blue-100 rounded-md text-slate-800">
          Submit
        </button>
      </div>
    </div>
  );
};
