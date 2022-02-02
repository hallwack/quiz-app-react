import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Questions from "./components/Questions";
// import Result from "./components/Result";
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import { createStore } from "redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="quiz" element={<Questions />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </BrowserRouter> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
