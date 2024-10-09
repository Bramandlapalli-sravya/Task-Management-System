import React from "react";
import { TaskColumnStyles } from "./styles.ts";

const TaskColumn = ({ status, tasks }) => {
    return (
        <TaskColumnStyles className={`d-flex flex-column col-4`}>
            <div className="task-status">{status}</div>
            <div className={`d-flex flex-grow-1 ${tasks.length === 0 && `justify-content-center align-items-center text-center p-3`}`}>
                {tasks.length > 0 ? (
                    tasks.map((task, index) => (
                        <div key={index} className="task-item">{task}</div>
                    ))
                ) : (
                    <div className="text-muted">Looks like there are no tasks in "{status}" yet. Add a task to get started!</div>
                )}
            </div>
        </TaskColumnStyles>
    );
}

export default TaskColumn;
