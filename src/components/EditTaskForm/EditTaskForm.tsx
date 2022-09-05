import React from "react";

import classes from "./EditTaskForm.module.css";
import useInput from "../../hooks/use-input";
import { isEmpty } from "../../helpers/inputValidatior";

const EditTaskForm: React.FC<{
    id: string;
    onEditTask: (id: string, text: string) => void;
    onCancel: () => void;
}> = (props) => {
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

        props.onEditTask(props.id, enteredText);
        resetTextInput();
    };

    const cancelHandler = () => {
        resetTextInput();
        props.onCancel();
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
                    value={enteredText}
                />
            </div>
            <div className={classes.button}>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button type="submit" disabled={!enteredTextIsValid}>
                    OK
                </button>
            </div>
        </form>
    );
};

export default EditTaskForm;
