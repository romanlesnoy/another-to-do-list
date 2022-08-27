import React from "react";

import classes from "./AddTaskForm.module.css";

const Form = () => {
    return (
        <section>
            <form className={classes.form}>
                <div className={classes.container}>
                    <label htmlFor="add_task" className="modeless-text">
                        Add Task:
                    </label>
                    <input
                        id="add_task"
                        type="text"
                        placeholder="Task"
                        className={classes.input}
                    />
                </div>
                <div className={classes.button}>
                    <button>Submit</button>
                </div>
            </form>
        </section>
    );
};

export default Form;
