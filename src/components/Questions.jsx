import React from "react";

export const Questions = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-slate-100 text-2xl font-medium">Question 1/4</h1>
      <div className="my-4 space-y-2">
        <p className="text-slate-100 text-lg">Siapa yang ganteng?</p>
        <div className="flex flex-col items-start space-y-4">
          <button className="py-2 px-3 bg-blue-300 rounded-md text-slate-800 shadow-md">
            Raihan Adam
          </button>
          <button className="py-2 px-3 bg-blue-300 rounded-md text-slate-800 shadow-md">
            Raihan Adam
          </button>
          <button className="py-2 px-3 bg-blue-300 rounded-md text-slate-800 shadow-md">
            Raihan Adam
          </button>
          <button className="py-2 px-3 bg-blue-300 rounded-md text-slate-800 shadow-md">
            Raihan Adam
          </button>
        </div>
      </div>
      <div className="flex space-x-2 items-center justify-center">
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
      </div>
      <div className="flex justify-end mt-6 mb-2 space-x-2">
        <button className="px-3 py-2 bg-blue-400 rounded-md text-slate-800">
          Next Question
        </button>
        <button className="px-3 py-2 bg-blue-100 rounded-md text-slate-800">
          Submit
        </button>
      </div>
    </div>
  );
};
