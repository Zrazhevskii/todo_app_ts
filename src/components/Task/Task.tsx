import { useEffect, useRef, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import ChangeForm from '../ChangeForm/ChangeForm';
import { TaskProps } from '../../models';

export default function Task({
    item,
    deletTask,
    toggleChecked,
    updateTask,
    startCountDownTimer,
}: TaskProps): JSX.Element {
    const { idTask, task, active, created, min, sec } = item;
    const [date, setDate] = useState(formatDistanceToNow(created));
    const [changeClass, setChangeClass] = useState(false);
    const [booleanTimer, setBooleanTimer] = useState(false);
    const intervalTime = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
    const [countDownTimer, setCountDownTimer] = useState({
        minTimer: 0,
        secTimer: 0,
    });

    const { minTimer, secTimer } = countDownTimer;

    useEffect(() => {
        setCountDownTimer({
            minTimer: min,
            secTimer: sec,
        });
    }, [min, sec]);

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(formatDistanceToNow(created));
        }, 5000);
        return () => clearInterval(interval);
    }, [created]);

    const description = active ? '' : 'description';
    const view = changeClass ? 'completed editing' : 'completed';

    const handleChangeClass = () => {
        setChangeClass((prevTask) => !prevTask);
    };

    const startPauseTimer = () => {
        if (!active) return;
        if (min === 0 && sec === 0) return;
        if (!booleanTimer) {
            intervalTime.current = setInterval(() => {
                setCountDownTimer((prev) => {
                    // { minTimer, secTimer } = prev;
                    if (prev.secTimer === 0) {
                        return {
                            minTimer: prev.minTimer - 1,
                            secTimer: 59,
                        };
                    }
                    return {
                        ...prev,
                        secTimer: prev.secTimer - 1,
                    };
                });
            }, 1000);
        }
        setBooleanTimer(true);
    };

    const toggleActive = () => {
        if (intervalTime.current) clearInterval(intervalTime.current);
        if (active) {
            setCountDownTimer({
                minTimer: 0,
                secTimer: 0,
            });
        }

        setBooleanTimer(false);
        toggleChecked(idTask);
    };

    const stopTimer = () => {
        startCountDownTimer(idTask, minTimer, secTimer);
        clearInterval(intervalTime.current);
        setBooleanTimer(false);
    };

    useEffect(() => {
        if (minTimer === 0 && secTimer === 0) {
            clearInterval(intervalTime.current);
        }
    }, [minTimer, secTimer]);

    const deletItemTask = () => {
        if (intervalTime.current) clearInterval(intervalTime.current);
        deletTask(idTask);
    };

    return (
        <li className={view}>
            <div className="view">
                <input id={idTask} className="toggle" type="checkbox" checked={!active} onChange={toggleActive} />
                <label htmlFor={idTask}>
                    <span className={description}>{task}</span>
                    <span className="descrip">
                        <button
                            type="button"
                            aria-label="Edit task"
                            className="icon icon-play"
                            onClick={startPauseTimer}
                        />
                        <button type="button" aria-label="Edit task" className="icon icon-pause" onClick={stopTimer} />
                        {minTimer}:{secTimer}
                        {/* {minTimer}:{secTimer} */}
                    </span>
                    <span className="created">created {date} ago</span>
                </label>
                <button type="button" aria-label="Edit task" className="icon icon-edit" onClick={handleChangeClass} />
                <button type="button" aria-label="Delete task" className="icon icon-destroy" onClick={deletItemTask} />
            </div>
            {changeClass && <ChangeForm updateTask={updateTask} changeClassName={handleChangeClass} data={item} />}
        </li>
    );
}
