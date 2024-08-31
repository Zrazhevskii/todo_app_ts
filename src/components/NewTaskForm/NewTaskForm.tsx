import React, { useState } from 'react';
import './NewTaskForm.css';
import { Time } from '../../models';

interface CreateTask {
    createTask: (valueForm: string, time: Time) => void;
}

export default function NewTaskForm({ createTask }: CreateTask): JSX.Element {
    const [valueForm, setValueForm] = useState('');
    const [time, setTime] = useState({
        min: '',
        sec: '',
    });

    const { min, sec } = time;

    const handleChangeForm = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;
        setTime((prev) => ({ ...prev, [name]: value }));
    };

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setValueForm(evt.target.value);
    };

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (valueForm.trim() !== '') {
            createTask(valueForm, time);
            setValueForm('');
            setTime({
                min: '',
                sec: '',
            });
        }
    };

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={(evt) => handleSubmit(evt)} className="new-todo-form">
                <button type="submit" hidden aria-hidden />
                <input
                    className="new-todo"
                    type="text"
                    name="valueForm"
                    value={valueForm}
                    placeholder="What needs to be done?"
                    onChange={(evt) => handleChange(evt)}
                    autoFocus
                    required
                />
                <input
                    className="new-todo-form__timer"
                    placeholder="Min"
                    type="number"
                    min="0"
                    max="59"
                    autoFocus
                    name="min"
                    value={min}
                    onChange={(evt) => handleChangeForm(evt)}
                    required
                />
                <input
                    className="new-todo-form__timer"
                    placeholder="Sec"
                    type="number"
                    min="0"
                    max="59"
                    autoFocus
                    name="sec"
                    value={sec}
                    onChange={(evt) => handleChangeForm(evt)}
                    required
                />
            </form>
        </header>
    );
}
