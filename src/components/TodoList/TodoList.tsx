import React from "react";

import classes from "./TodoList.module.css";
import TodoItem from "../TodoItem/TodoItem";
import Todo from "../../models/todo";

const TodoList: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <section>
            <ul className={classes.list}>
                {props.items.map((item) => (
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
