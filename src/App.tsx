import Header from "./components/Header/Header";
import Form from "./components/AddTaskForm/AddTaskForm";
import TodoList from "./components/TodoList/TodoList";
import TodosContextProvider from "./store/todo-context";

function App() {
    return (
        <TodosContextProvider>
            <Header />
            <main>
                <Form />
                <TodoList />
            </main>
        </TodosContextProvider>
    );
}

export default App;
