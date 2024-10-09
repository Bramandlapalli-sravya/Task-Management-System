import Board from "./Board/index.tsx";
import "./App.css";
import Header from "./Header/index.tsx";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { createContext } from "react";

export const TaskManager = createContext();

function App() {
  const [tasks, setTasks] = useState({
    "To Do": [],
    "In Progress": [],
    "Done": [],
  });

  const addTask = (newTask, status) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [status]: [...prevTasks[status], newTask],
    }));
  };

  return (
    <TaskManager.Provider value={tasks}>
      <div className="App">
        <Header addTask={addTask} />
        <Board tasks={tasks} />
      </div>
    </TaskManager.Provider>
  );
}
export default App;
