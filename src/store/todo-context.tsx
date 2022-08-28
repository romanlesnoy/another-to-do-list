import React, { useState } from "react";

import Todo from "../models/todo";

interface Props {
    children: React.ReactNode;
}

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
    setIsDone: (id: string) => void;
    editTodo: (id: string, text: string) => void;
};

export const TodoContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => {},
    setIsDone: () => {},
    removeTodo: () => {},
    editTodo: () => {}
});

const TodoContextProvider: React.FC<Props> = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText: string, isDone = false) => {
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

    const setIsDoneHandler = (id: string) => {
        const updatedTodos = todos.map((todo) => {
            if (id === todo.id) {
                return { ...todo, isDone: !todo.isDone };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    const editTodoHandler = (id: string, text: string) => {
        const editedTodoList = todos.map((todo) => {
            if (id === todo.id) {
                return { ...todo, text: text };
            }
            return todo;
        });
        setTodos(editedTodoList);
    };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
        setIsDone: setIsDoneHandler,
        editTodo: editTodoHandler
    };

    return (
        <TodoContext.Provider value={contextValue}>
            {props.children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
