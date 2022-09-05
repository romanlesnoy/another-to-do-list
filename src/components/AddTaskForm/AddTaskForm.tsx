import React, { useContext } from "react";

import { TodoContext } from "../../store/todo-context";
import useInput from "../../hooks/use-input";
import { isEmpty } from "../../helpers/inputValidatior";

const Form = () => {
    const todoCtx = useContext(TodoContext);

    const {
        value: enteredText,
        isValid: enteredTextIsValid,
        valueChangeHandler: textChangeHandler,
        reset: resetTextInput
    } = useInput(isEmpty);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        if (!enteredTextIsValid) {
            return;
        }

        todoCtx.addTodo(enteredText);
        resetTextInput();
    };

    const cancelHandler = () => {
        resetTextInput();
    };

    return (
        <section>
            <form className="flex-column" onSubmit={submitHandler}>
                <div className="flex-row">
                    <label htmlFor="add_task">Add Task:</label>
                    <input
                        id="add_task"
                        type="text"
                        placeholder="Task"
                        className="input"
                        onChange={textChangeHandler}
                        value={enteredText}
                        autoComplete="off"
                    />
                </div>

                <div className="buttons-container">
                    <button
                        type="button"
                        onClick={cancelHandler}
                        disabled={!enteredTextIsValid}
                    >
                        Cancel
                    </button>
                    <button type="submit" disabled={!enteredTextIsValid}>
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Form;
