import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forms from "./components/Forms";
import Questions from "./components/Questions";
import Result from "./components/Result";
import { QuizContext } from "./context/quiz-context";

function App() {
  const [name, setName] = useState("");
  const [quizState, setQuizState] = useState("forms");
  const [score, setScore] = useState(0);

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
                <QuizContext.Provider
                  value={{
                    name,
                    setName,
                    score,
                    setScore,
                    quizState,
                    setQuizState,
                  }}
                >
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<Forms />} />
                      <Route path="quiz" element={<Questions />} />
                      <Route path="result" element={<Result />} />
                    </Routes>
                  </BrowserRouter>
                  {/* <Forms /> */}
                  {/* <Questions />
                  <Result /> */}
                </QuizContext.Provider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
