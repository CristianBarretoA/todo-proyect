import React from 'react';
import "./TodoForm.css";
import { TodoContext } from '../../../TodoContext';

export function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext);

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Agrega tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder={"Cortar cebolla"}
            />
            <div className={"TodoForm-buttonContainer"}>
                <button
                    type={'button'}
                    className={'TodoForm-button TodoForm-button-cancel'}
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    className={'TodoForm-button TodoForm-button-add'}
                    type={'submit'}
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}