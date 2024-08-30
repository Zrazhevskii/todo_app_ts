// import React, { useState, useEffect } from 'react';
import './App.css';
// import { v4 as uuidv4 } from 'uuid';
import NewTaskForm from './components/NewTaskForm/index';
// import TaskList from './components/TaskList/index';

function App() {
    // const [tasks, setTasks] = useState([
    //     { idTask: 1, task: 'Сделать машину', active: true, created: new Date(2023, 7, 1, 10, 28, 15) },
    //     { idTask: 2, task: 'Купить подарок', active: true, created: new Date(2024, 6, 2, 18, 5, 34) },
    // ]);

    return (
        <div>
            <NewTaskForm />
        </div>
    );
}

export default App;
