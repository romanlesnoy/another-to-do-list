import classes from "./EditTaskForm.module.css";

const EditTaskForm = () => {
    return (
        <form className={classes.form}>
            <div className={classes.container}>
                <label htmlFor="edit_task">Edit Task: </label>
                <input
                    id="edit_task"
                    type="text"
                    placeholder="Task"
                    className={classes.input}
                />
            </div>

            <div className={classes.button}>
                <button type="button">Cancel</button>
                <button type="submit">OK</button>
            </div>
        </form>
    );
};

export default EditTaskForm;
