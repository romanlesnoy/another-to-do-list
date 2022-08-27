import React, { useState } from "react";

import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string, isDone?: boolean) => void;
    removeTodo: (id: string) => void;
    setIsDone: (isDone: boolean) => void;
    editTodo: (text: string) => void;
};

const TodoContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    setIsDone: (isDone: boolean) => {},
    removeTodo: (id: string) => {},
    editTodo: () => {}
});

const TodoContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string, isDone: boolean = false) => {
        const newTodo = new Todo(todoText, isDone);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== todoId);
        });
    };

    const setIsDoneHandler = (isDone: boolean) => {
        !isDone;
    };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return <TodoContext.Provider>{props.children}</TodoContext.Provider>;
};

export default TodosContextProvider;
