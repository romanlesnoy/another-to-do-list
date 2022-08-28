import React, { useContext } from "react";

import classes from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";
import { TodoContext } from "../../store/todo-context";

const TodoList: React.FC = () => {
    const todoCtx = useContext(TodoContext);

    return (
        <section>
            <ul className={classes.list}>
                {todoCtx.items.map((item) => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        isDone={item.isDone}
                    />
                ))}
            </ul>
        </section>
    );
};

export default TodoList;
