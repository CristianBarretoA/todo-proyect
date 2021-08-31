import React from "react";
import {TodoCounter} from "./components/TodoCounter";
import {TodoSearch} from "./components/TodoSearch";
import {CreateTodoButton} from "./components/CreateTodoButton";
import {TodoList} from "./components/TodoList";
import {TodoItem} from "./components/TodoItem";

//import './App.css';

const todos = [
    {text: 'Regar las plantas', completed: true},
    {text: 'Prender la luz', completed: false},
    {text: 'Revisar PH de la tierra', completed: false}
]

function App() {
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>

            <TodoList>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                    />
                ))}
            </TodoList>

            <CreateTodoButton/>

        </React.Fragment>
    );
}

export default App;
