import React, { useContext } from "react";

import TodoItem from "../TodoItem/TodoItem";
import { TodoContext } from "../../store/todo-context";

const TodoList: React.FC = () => {
    const todoCtx = useContext(TodoContext);

    return (
        <section>
            <ul className="flex-column" aria-labelledby="list-heading">
                {todoCtx.items.map((item) => (
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
