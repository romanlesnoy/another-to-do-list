import React from "react";

import classes from "./EditTaskForm.module.css";
import useInput from "../../hooks/use-input";
import { isEmpty } from "../../helpers/inputValidatior";

const EditTaskForm: React.FC<{
    id: string;
    onEditTask: (id: string, text: string) => void;
}> = (props) => {
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

        props.onEditTask(props.id, enteredText);
        resetTextInput();
    };

    const cancelHandler = () => {
        resetTextInput();
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.container}>
                <label htmlFor="edit_task">Edit Task: </label>
                <input
                    id="edit_task"
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
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button type="submit">OK</button>
            </div>
        </form>
    );
};

export default EditTaskForm;
