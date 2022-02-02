import React, { useContext } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { QuizContext } from "../context/quiz-context";
import handleName from "../redux/actions/nameAction";

const Forms = (props) => {
  // const { name, setName } = useContext(QuizContext);

  const handleChangeName = (e) => {
    props.handleName(e.target.value);

    console.log(props.handleName(e.target.value));
  };

  /* const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name });
  }; */

  return (
    <form>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="text-sm text-slate-100">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={props.name}
            onChange={handleChangeName}
            className="px-2 py-2 rounded-md text-slate-800 border-2 border-blue-600 focus:border-blue-500 focus:border focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-end">
          <Link
            className="px-3 py-2 bg-blue-400 rounded-md text-slate-800"
            to="/quiz"
          >
            Start Quiz
          </Link>
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleName: (e) => dispatch(handleName(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
