import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { QuizContext } from "../context/quiz-context";
import { handleName, handleSubmit } from "../redux/actions/nameAction";

const Forms = (props) => {
  // const { name, setName } = useContext(QuizContext);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  /* const handleChangeName = (e) => {
    props.handleName(e.target.value);

    console.log(props.handleName(e.target.value));
  }; */

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(name);
    console.log(props.handleSubmit(name));
    navigate("/quiz");
    console.log({ name });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-sm text-slate-100">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-2 py-2 rounded-md text-slate-800 border-2 border-blue-600 focus:border-blue-500 focus:border focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-3 py-2 bg-blue-400 rounded-md text-slate-800"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </form>
  );
};

/* const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
}; */

const mapDispatchToProps = (dispatch) => {
  return {
    handleName: (e) => dispatch(handleName(e)),
    handleSubmit: (name) => dispatch(handleSubmit(name)),
  };
};

export default connect(null, mapDispatchToProps)(Forms);
