import React from "react";

export const Forms = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="name" className="text-sm text-slate-100">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="px-2 py-2 rounded-md text-slate-800 border-2 border-blue-600 focus:border-blue-500 focus:border focus:ring-1 focus:ring-blue-500"
        />
      </div>
      <div className="flex justify-end">
        <button className="px-3 py-2 bg-blue-400 rounded-md text-slate-800">
          Start Quiz
        </button>
      </div>
    </div>
  );
};
