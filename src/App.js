import React from "react";
import Modal from "./components/Modal";
import Task from './components/Task';
import Tasklist from "./components/Tasklist";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Tasklist />
      <button
        id="addTask"
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#staticBackdrop"
      >
        +
      </button>

      <Modal />
    </div>
  );
}

export default App;
