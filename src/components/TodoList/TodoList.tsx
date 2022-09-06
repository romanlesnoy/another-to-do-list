import React, { useContext, useRef, useEffect } from "react";

import TodoItem from "../TodoItem/TodoItem";
import { TodoContext } from "../../store/todo-context";
import usePrevious from "../../hooks/use-previous";

const TodoList: React.FC = () => {
    const todoCtx = useContext(TodoContext);

    const { items: tasks } = todoCtx;
    const { length: numberOfTask } = tasks;

    console.log(tasks.length);

    const listHeadingRef = useRef<HTMLHeadingElement>(null);
    const prevTaskLength = usePrevious(numberOfTask);

    useEffect(() => {
        if (typeof prevTaskLength === "undefined") {
            return;
        }
        if (tasks.length - prevTaskLength === -1) {
            listHeadingRef.current?.focus();
        }
    }, [tasks.length, prevTaskLength]);

    return (
        <section>
            <h2 tabIndex={-1} ref={listHeadingRef}>
                {numberOfTask} tasks remaining
            </h2>
            <ul className="flex-column" aria-labelledby="list-heading">
                {tasks.map((item) => (
                    <TodoItem
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        isDone={item.isDone}
                    />
                ))}
            </ul>
        </section>
    );
};

export default TodoList;
