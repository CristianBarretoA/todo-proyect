import React from "react";
import './CreateTodoButton.css';

export function CreateTodoButton() {
    /**
     * Function that returns an alert message
     * @param msg
     */
    const onClickButton = (msg) => {
        alert(msg)
    };

    return (
        <button
            className={'CreateTodoButton'}
            onClick={() => onClickButton('Test message')}
        >
            +
        </button>
    );
}