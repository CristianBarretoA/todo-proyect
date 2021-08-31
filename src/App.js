import React from "react";
import {AppUI} from './components/AppUI';

//import './App.css';

/*const defaultTodos = [
 { text: 'Regar las plantas', completed: false },
 { text: 'Prender la luz', completed: false },
 { text: 'Revisar PH de la tierra', completed: false }
 ];*/

function App () {

    const localStorageTodos = localStorage.getItem('TODOS_V1');
    let parsedTodos = localStorageTodos
        ? JSON.parse(localStorageTodos)
        : () => {
            localStorage.setItem('TODOS_V1', JSON.stringify([]));
            return [];
        };

    const [todos, setTodos] = React.useState(parsedTodos);
    const [searchValue, setSearchValue] = React.useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos;

    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const saveTodos = ( newTodos ) => {
        localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
        setTodos(newTodos);
    };

    const toggleCompleteTodo = ( text ) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = ( text ) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };


    return (
        <AppUI
            totalTodos={totalTodos}
            completedTodos={completedTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchedTodos={searchedTodos}
            toggleCompleteTodo={toggleCompleteTodo}
            deleteTodo={deleteTodo}
            todos={todos}
            setTodos={setTodos}
        />
    );
}

export default App;
