import React, { useState } from 'react';
import { HeaderStyles } from './styles.ts';

const Header = ({ addTask, status }) => {
    const [tasks, setTasks] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('To Do');

    const handleAddTask = () => {
        if (tasks === '') { return '' }
        addTask(tasks, selectedStatus);
        setTasks('');
    };

    return (
        <HeaderStyles>
            <div className='header'>
                <h1>Task Management Board</h1>
            </div>
            <div className='d-flex p-3 gap-2'>
                <input
                    type="text"
                    value={tasks}
                    onChange={(e) => setTasks(e.target.value)}
                    placeholder="Enter task"
                />
                <select onChange={(e) => setSelectedStatus(e.target.value)} value={selectedStatus}>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
                <button onClick={handleAddTask}>Add Task</button>
            </div>
        </HeaderStyles>
    );
}

export default Header;
