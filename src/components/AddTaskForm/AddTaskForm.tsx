import React, { useContext } from "react";

import classes from "./AddTaskForm.module.css";
import { TodoContext } from "../../store/todo-context";
import useInput from "../../hooks/use-input";

const isEmpty = (value: string) => value.trim() !== "";

const Form = () => {
    const todoCtx = useContext(TodoContext);

    const {
        value: enteredText,
        isValid: enteredTextIsValid,
        hasError: textInputHasError,
        valueChangeHandler: textChangeHandler,
        inputBlurHandler: textBlurHandler,
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

    return (
        <section>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.container}>
                    <label htmlFor="add_task" className="modeless-text">
                        Add Task:
                    </label>
                    <input
                        id="add_task"
                        type="text"
                        placeholder="Task"
                        className={classes.input}
                        onChange={textChangeHandler}
                        onBlur={textBlurHandler}
                        value={enteredText}
                    />
                </div>
                {textInputHasError && <span>This field must not be empty</span>}
                <div className={classes.button}>
                    <button type="submit" disabled={!enteredTextIsValid}>
                        Submit
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Form;