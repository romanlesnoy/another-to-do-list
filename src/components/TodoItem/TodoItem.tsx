import React, { useContext, useState } from "react";

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
            <article className="flex-column">
                <div className="flex-row">
                    <input
                        id={`task-${props.id}`}
                        type="checkbox"
                        checked={props.isDone}
                        onChange={() => todoCtx.setIsDone(props.id)}
                    />
                    <label
                        htmlFor={`task-${props.id}`}
                        className={props.isDone ? "todo-done" : ""}
                    >
                        {props.text}
                    </label>
                </div>

                {!isEditing && (
                    <div className="buttons-container">
                        <button
                            type="button"
                            onClick={() => todoCtx.removeTodo(props.id)}
                        >
                            Delete
                        </button>

                        <button type="button" onClick={showEditFormHandler}>
                            Edit
                        </button>
                    </div>
                )}

                {isEditing && (
                    <EditTaskForm
                        id={props.id}
                        onEditTask={todoCtx.editTodo}
                        onToggleShowForm={showEditFormHandler}
                    />
                )}
            </article>
        </li>
    );
};

export default TodoItem;
