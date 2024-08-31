export interface Task {
    idTask: string;
    task: string;
    active: boolean;
    created: Date;
    min: number;
    sec: number;
}

export interface Time {
    min: string;
    sec: string;
}

export interface TaskListProps {
    data: Task[];
    deletTask: (idTask: string) => void;
    toggleChecked: (idTask: string) => void;
    updateTask: (idTask: string, text: string) => void;
    startCountDownTimer: (idTask: string, minTimer: number, secTimer: number) => void;
}

export interface TaskProps {
    item: Task;
    deletTask: (idTask: string) => void;
    toggleChecked: (idTask: string) => void;
    updateTask: (idTask: string, text: string) => void;
    startCountDownTimer: (idTask: string, minTimer: number, secTimer: number) => void;
}

export interface IMoviesItem {
    item: {
        idTask: string;
        task: string;
        active: boolean;
        created: Date;
        min: number;
        sec: number;
    };
}

export interface ChangeFormProps {
    data: {
        idTask: string;
        task: string;
    };
    updateTask: (idTask: string, text: string) => void;
    changeClassName: () => void;
}

export interface FooterProps {
    clearTasksCompleted: () => void;
    updateStatus: (status: string) => void;
    activeCount: number;
}
