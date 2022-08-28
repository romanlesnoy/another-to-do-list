import React, { useContext, useState } from "react";

import classes from "./TodoItem.module.css";
import EditTaskForm from "../EditTaskForm/EditTaskForm";
import { TodoContext } from "../../store/todo-context";

const TodoItem: React.FC<{
    id: string;
    text: string;
    isDone: boolean;
}> = (props) => {
    const todoCtx = useContext(TodoContext);

    const [isEditing, setIsediting] = useState(false);

    const showEditFormHandler = () => {
        setIsediting(!isEditing);
    };

    return (
        <li>
            <article>
                <div className={classes.container}>
                    <h2 className={props.isDone ? classes.done : ""}>
                        {props.text}
                    </h2>
                    <label htmlFor="task_done" className={classes.label}>
                        <input
                            id="task_done"
                            type="checkbox"
                            checked={props.isDone}
                            onChange={() => todoCtx.setIsDone(props.id)}
                        />
                        Done
                    </label>
                    {!isEditing && (
                        <button type="button" onClick={showEditFormHandler}>
                            Edit
                        </button>
                    )}
                </div>

                {isEditing && (
                    <EditTaskForm
                        id={props.id}
                        onEditTask={todoCtx.editTodo}
                        onCancel={showEditFormHandler}
                    />
                )}
            </article>
        </li>
    );
};

export default TodoItem;
