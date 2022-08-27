class Todo {
    id: string;
    text: string;
    isDone: boolean;

    constructor(todoText: string, isDone: boolean) {
        this.id = new Date().toISOString();
        this.text = todoText;
        this.isDone = isDone;
    }
}

export default Todo;
