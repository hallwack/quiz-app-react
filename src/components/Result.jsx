import React, { useContext } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { QuizContext } from "../context/quiz-context";

const Result = (props) => {
  const { score } = useContext(QuizContext);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center space-y-2">
        <p className="text-slate-100 text-lg">{props.name.value}'s Result</p>
        <p className="text-slate-100 text-3xl font-bold">{score}</p>
      </div>
      <div className="flex justify-end">
        <Link
          to="/"
          className="px-3 py-2 bg-blue-400 rounded-md text-slate-800"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

export default connect(mapStateToProps)(Result);
