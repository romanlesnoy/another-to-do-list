import React, { useContext, useState, useRef, useEffect } from "react";

import EditTaskForm from "../EditTaskForm/EditTaskForm";
import { TodoContext } from "../../store/todo-context";
import usePrevious from "../../hooks/use-previous";

const TodoItem: React.FC<{
    id: string;
    text: string;
    isDone: boolean;
}> = (props) => {
    const todoCtx = useContext(TodoContext);

    const [isEditing, setIsediting] = useState(false);

    const editFieldRef = useRef<HTMLInputElement>(null);
    const editButtonRef = useRef<HTMLButtonElement>(null);
    const wasEditing = usePrevious(isEditing);

    useEffect(() => {
        if (!wasEditing && isEditing) {
            editFieldRef.current?.focus();
        }
        if (wasEditing && !isEditing) {
            editButtonRef.current?.focus();
        }
    }, [isEditing, wasEditing]);

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

                        <button
                            type="button"
                            onClick={showEditFormHandler}
                            aria-pressed="false"
                            ref={editButtonRef}
                        >
                            Edit
                        </button>
                    </div>
                )}

                {isEditing && (
                    <EditTaskForm
                        id={props.id}
                        onEditTask={todoCtx.editTodo}
                        onToggleShowForm={showEditFormHandler}
                        inputRefProp={editFieldRef}
                    />
                )}
            </article>
        </li>
    );
};

export default TodoItem;
