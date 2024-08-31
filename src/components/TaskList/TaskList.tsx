import './TaskList.css';
import Task from '../Task/Task';
import { TaskListProps } from '../../models';

export default function TaskList({ data, deletTask, toggleChecked, updateTask, startCountDownTimer }: TaskListProps) {
    return (
        <ul className="todo-list">
            {data &&
                data.map((item) => {
                    return (
                        <Task
                            item={item}
                            deletTask={deletTask}
                            toggleChecked={toggleChecked}
                            updateTask={updateTask}
                            startCountDownTimer={startCountDownTimer}
                            key={item.idTask}
                        />
                    );
                })}
        </ul>
    );
}
