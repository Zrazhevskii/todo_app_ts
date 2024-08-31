import { useState } from 'react';
import { ChangeFormProps } from '../../models';

export default function ChangeForm(props: ChangeFormProps) {
    const { updateTask, changeClassName, data } = props;
    const { idTask, task } = data;
    const [text, setText] = useState(task);

    const updateTaskForm = (evt: React.ChangeEvent<HTMLInputElement>) => {
        evt.preventDefault();
        setText(evt.target.value);
    };

    const createUpdateTask = () => {
        if (text.trim() !== '') {
            updateTask(idTask, text);
            changeClassName();
        }
    };

    return (
        <form onSubmit={createUpdateTask}>
            <input type="text" className="edit" value={text} onChange={(evt) => updateTaskForm(evt)} required />
        </form>
    );
}
