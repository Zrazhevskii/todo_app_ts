import { useState } from 'react';
import './Footer.css';
import { FooterProps } from '../../models';

export default function Footer({ clearTasksCompleted, updateStatus, activeCount }: FooterProps) {
    const [classActive, setClassActive] = useState({
        all: 'selected',
        itemActive: '',
        itemCompleted: '',
    });
    const { all, itemActive, itemCompleted } = classActive;

    const handleChangeStatus = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const valueStatus = evt.currentTarget.id;
        if (valueStatus === 'All') {
            setClassActive({
                all: 'selected',
                itemActive: '',
                itemCompleted: '',
            });
        } else if (valueStatus === 'Active') {
            setClassActive({
                all: '',
                itemActive: 'selected',
                itemCompleted: '',
            });
        } else if (valueStatus === 'Completed') {
            setClassActive({
                all: '',
                itemActive: '',
                itemCompleted: 'selected',
            });
        }
        updateStatus(valueStatus);
    };

    return (
        <footer className="footer">
            <span className="todo-count">{activeCount} items left</span>
            <ul className="filters">
                <li>
                    <button
                        type="button"
                        title='"All"'
                        id="All"
                        className={all}
                        onClick={(evt) => handleChangeStatus(evt)}
                    >
                        All
                    </button>
                </li>
                <li>
                    <button type="button" id="Active" className={itemActive} onClick={(evt) => handleChangeStatus(evt)}>
                        Active
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        id="Completed"
                        className={itemCompleted}
                        onClick={(evt) => handleChangeStatus(evt)}
                    >
                        Completed
                    </button>
                </li>
            </ul>
            <button type="button" className="clear-completed" onClick={clearTasksCompleted}>
                Clear completed
            </button>
        </footer>
    );
}
