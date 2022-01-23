import React, { useContext } from "react";
import { QuizContext } from "../context/quiz-context";

export const Result = () => {
  const { score, setQuizState, name } = useContext(QuizContext);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center space-y-2">
        <p className="text-slate-100 text-lg">{name}'s Result</p>
        <p className="text-slate-100 text-3xl font-bold">{score}</p>
      </div>
      <div className="flex justify-end">
        <button
          className="px-3 py-2 bg-blue-400 rounded-md text-slate-800"
          onClick={() => setQuizState("forms")}
        >
          Home
        </button>
      </div>
    </div>
  );
};
