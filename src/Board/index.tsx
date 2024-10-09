import React, { useContext } from "react";
import TaskColumn from "./TaskColumn/index.tsx";
import { TaskManager } from "../App.js";

const Board = () => {

    const tasks = useContext(TaskManager);

    return (
        <div className="d-flex flex-grow-1">
            <TaskColumn status="To Do" tasks={tasks['To Do']} />
            <TaskColumn status="In Progress" tasks={tasks['In Progress']} />
            <TaskColumn status="Done" tasks={tasks['Done']} />
        </div>
    );
};

export default Board;
