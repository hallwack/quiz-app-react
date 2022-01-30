// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Forms } from "./components/Forms.jsx";
import { Questions } from "./components/Questions.jsx";
import { Result } from "./components/Result.jsx";
// import { QuizContext } from "./context/quiz-context";
import handleQuizState from "./redux/actions/quizActions";

function App() {
  /* const [name, setName] = useState("");
  const [quizState, setQuizState] = useState("forms");
  const [score, setScore] = useState(0); */

  const quizState = useSelector((state) => state.quizState);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="bg-sky-300 min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <div className="w-1/3">
            <div className="py-8">
              <h1 className="text-4xl font-semibold text-slate-800">
                Quiz App
              </h1>
              <div className="bg-slate-600 p-4 my-4 rounded-md shadow-lg shadow-blue-400 space-y-4">
                {/* <QuizContext.Provider
                  value={{ name, setName, score, setScore, quizState, setQuizState }}
                > */}
                {dispatch(handleQuizState("forms")) && <Forms />}
                {dispatch(handleQuizState("questions")) && <Questions />}
                {dispatch(handleQuizState("result")) && <Result />}
                {/* <Forms />
                  <Questions />
                  <Result /> */}
                {/* </QuizContext.Provider> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
