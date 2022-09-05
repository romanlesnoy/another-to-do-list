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
                    <label
                        htmlFor={`task-${props.id}`}
                        className={props.isDone ? classes.done : ""}
                    >
                        <input
                            id={`task-${props.id}`}
                            type="checkbox"
                            checked={props.isDone}
                            onChange={() => todoCtx.setIsDone(props.id)}
                        />
                        {props.text}
                    </label>
                </div>

                <div>
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
