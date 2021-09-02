import React from 'react';
import { TodoContext } from '../../TodoContext';
import { TodoCounter } from '../Todo/TodoCounter';
import { TodoSearch } from '../Todo/TodoSearch';
import { TodoList } from '../Todo/TodoList';
import { TodoItem } from '../Todo/TodoItem';
import { CreateTodoButton } from '../Elements/CreateButton';
import { Modal } from '../Elements/Modal';
import { TodoForm } from '../Todo/TodoForm';
import TodosError from '../Todo/TodosError';
import { TodosLoading } from '../Todo/TodosLoading';
import EmptyTodos from '../Todo/TodosError/EmpyTodos';

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
        {error && <TodosError error={error}/>}
        {loading && <TodosLoading/>}
        {(!loading && !searchedTodos.length) && <EmptyTodos/>}
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
