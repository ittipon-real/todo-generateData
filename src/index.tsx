import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import TodoList from "./page/todoList/TodoList";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateDataFormAPI from "./page/apiDataSummary/CreateDataFormAPI";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
      <Route path="/" element={ <TodoList />} />
      <Route path="/todo-list" element={ <TodoList />} />
      <Route path="/data-api" element={ <CreateDataFormAPI />} />
      </Routes>
    </Router>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
