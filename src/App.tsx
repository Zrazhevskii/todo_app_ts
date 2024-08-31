import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Time } from './models';
import './App.css';
import NewTaskForm from './components/NewTaskForm/index';
import TaskList from './components/TaskList/index';
import Footer from './components/Footer/index';

function App(): JSX.Element {
    const [tasks, setTasks] = useState([
        {
            idTask: '1',
            task: 'Сделать машину',
            active: true,
            created: new Date(2023, 7, 1, 10, 28, 15),
            min: 10,
            sec: 45,
        },
        {
            idTask: '2',
            task: 'Купить подарок',
            active: true,
            created: new Date(2024, 6, 2, 18, 5, 34),
            min: 12,
            sec: 15,
        },
    ]);

    const activeCount: number = tasks.filter((elem) => elem.active).length;

    const [filterTasks, setfilterTasks] = useState(tasks);

    useEffect(() => {
        setfilterTasks(tasks);
    }, [tasks]);

    const createTask = (valueForm: string, timer: Time) => {
        const time = new Date();
        setTasks((prevTasks) => [
            ...prevTasks,
            {
                idTask: uuidv4(),
                task: valueForm,
                active: true,
                created: time,
                min: Number(timer.min),
                sec: Number(timer.sec),
            },
        ]);
    };

    const clearTasksCompleted = () => {
        setTasks(tasks.filter((item) => item.active));
    };

    const deletTask = (id: string) => {
        setTasks(tasks.filter((item) => item.idTask !== id));
    };

    const updateTask = (id: string, text: string) => {
        // console.log()
        setTasks(tasks.map((elem) => (elem.idTask === id ? { ...elem, task: text } : { ...elem })));
    };

    const updateStatus = (status: string) => {
        let updateCallbuck;
        if (status === 'Active') {
            updateCallbuck = tasks.filter((item) => item.active);
        } else if (status === 'Completed') {
            updateCallbuck = tasks.filter((item) => !item.active);
        } else {
            updateCallbuck = tasks;
        }
        return setfilterTasks(updateCallbuck);
    };

    const toggleChecked = (id: string) => {
        setTasks(
            tasks.map((elem) => (elem.idTask === id ? { ...elem, active: !elem.active, min: 0, sec: 0 } : { ...elem })),
        );
    };

    const startCountDownTimer = (id: string, minTimer: number, secTimer: number) => {
        // console.log(minTimer, secTimer);
        return setTasks((prev) => {
            return prev.map((elem) => (elem.idTask === id ? { ...elem, min: minTimer, sec: secTimer } : { ...elem }));
        });
    };

    return (
        <section className="todoapp">
            <NewTaskForm createTask={createTask} />
            <section className="main">
                <TaskList
                    data={filterTasks}
                    deletTask={deletTask}
                    toggleChecked={toggleChecked}
                    updateTask={updateTask}
                    startCountDownTimer={startCountDownTimer}
                />
                <Footer
                    clearTasksCompleted={clearTasksCompleted}
                    updateStatus={updateStatus}
                    activeCount={activeCount}
                />
            </section>
        </section>
    );
}

export default App;
