import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { QuizContext } from "../context/quiz-context";
import handleQuizState from "../redux/actions/quizActions";

export const Forms = () => {
  const { name, setName, setQuizState } = useContext(QuizContext);

  const quizState = useSelector((state) => state.quizState);
  const dispatch = useDispatch();

  const handleChangeName = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name });
  };

  console.log(quizState);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-sm text-slate-100">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleChangeName}
            className="px-2 py-2 rounded-md text-slate-800 border-2 border-blue-600 focus:border-blue-500 focus:border focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-3 py-2 bg-blue-400 rounded-md text-slate-800"
            onClick={() => dispatch(handleQuizState("questions"))}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </form>
  );
};
