import React, { useContext } from "react";

import classes from "./TodoItem.module.css";
import EditTaskForm from "../EditTaskForm/EditTaskForm";
import { TodoContext } from "../../store/todo-context";

const TodoItem: React.FC<{
    id: string;
    text: string;
    isDone: boolean;
}> = (props) => {
    const todoCtx = useContext(TodoContext);

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
                            onChange={() => todoCtx.setIsDone(props.id)}
                        />
                        Done
                    </label>
                </div>

                <EditTaskForm id={props.id} onEditTask={todoCtx.editTodo} />
            </article>
        </li>
    );
};

export default TodoItem;
