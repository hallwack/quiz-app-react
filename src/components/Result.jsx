import React from "react";

export const Result = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center space-y-2">
        <p className="text-slate-100 text-lg">Your Result</p>
        <p className="text-slate-100 text-3xl font-bold">90</p>
      </div>
      <div className="flex justify-end">
        <button className="px-3 py-2 bg-blue-400 rounded-md text-slate-800">
          Home
        </button>
      </div>
    </div>
  );
};
