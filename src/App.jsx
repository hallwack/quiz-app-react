import { Forms } from "./components/Forms.jsx";
import { Questions } from "./components/Questions.jsx";
import { Result } from "./components/Result.jsx";

function App() {
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
                {/* <Forms /> */}
                {/* <Questions /> */}
                <Result />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
