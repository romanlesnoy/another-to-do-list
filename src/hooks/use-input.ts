import { useReducer } from "react";

type InputState = {
    value: string;
    isTouched: boolean;
};

type Action =
    | { type: "INPUT"; value: string }
    | { type: "BLUR" }
    | { type: "RESET" };

type ValidationFunction = (a: string) => boolean;

const initialInputState = {
    value: "",
    isTouched: false
};

const inputsStateReducer = (state: InputState, action: Action) => {
    if (action.type === "INPUT") {
        return { value: action.value, isTouched: state.isTouched };
    }
    if (action.type === "BLUR") {
        return { isTouched: true, value: state.value };
    }
    if (action.type === "RESET") {
        return { isTouched: false, value: "" };
    }
    return initialInputState;
};

const useInput = (validateValue: ValidationFunction) => {
    const [inputState, dispatch] = useReducer(
        inputsStateReducer,
        initialInputState
    );

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "INPUT", value: event.target.value });
    };

    const inputBlurHandler = () => {
        dispatch({ type: "BLUR" });
    };

    const reset = () => {
        dispatch({ type: "RESET" });
    };

    return {
        value: inputState.value,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;
