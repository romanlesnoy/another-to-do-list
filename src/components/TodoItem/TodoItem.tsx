import React from "react";

import classes from "./TodoItem.module.css";
import EditTaskForm from "../EditTaskForm/EditTaskForm";

const TaskItem: React.FC<{ text: string; isDone: boolean }> = (props) => {
    return (
        <li>
            <article>
                <div className={classes.container}>
                    <h2 className={props.isDone ? classes.done : ""}>
                        {props.text}
                    </h2>
                    <button type="button">Edit</button>
                    <label htmlFor="task_done" className={classes.label}>
                        <input
                            id="task_done"
                            type="checkbox"
                            checked={props.isDone}
                        />
                        Done
                    </label>
                </div>

                <EditTaskForm />
            </article>
        </li>
    );
};

export default TaskItem;
