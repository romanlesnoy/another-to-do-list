import Header from "./components/Header/Header";
import Form from "./components/AddTaskForm/AddTaskForm";
import TodoList from "./components/TodoList/TodoList";
import Todo from "./models/todo";

function App() {
    const todos = [
        new Todo("learn react", true),
        new Todo("learn typescript", false)
    ];

    return (
        <div className="window">
            <Header />
            <Form />
            <TodoList items={todos} />
        </div>
    );
}

export default App;
