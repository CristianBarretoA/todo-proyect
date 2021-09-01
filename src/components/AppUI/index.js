import React from 'react';
import { TodoContext } from '../../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {

    const {
        error,
        loading,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>

            <TodoList>
                {error && <p>An error has occurred</p>}
                {loading && <p>Loading</p>}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onCompleted={() => toggleCompleteTodo(todo.text)}
                        onDeleted={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}

            <CreateTodoButton
                setOpenModal={setOpenModal}
            />

        </React.Fragment>
    );
}

export { AppUI };