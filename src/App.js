import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem.js';

    const TodoItemsFromOutside = [
        {id: "learn-react", labelName: "Learn React"},
        {id: "create-todo-app", labelName: "Create a todo app"},
        {id: "profit", labelName: "Profit"},
        {id: "have-fun", labelName: "Have fun!"}
    ]

    const App = () => (
    <div id="my-todo-app" className="my-todo-app">
            <h1>My to do app</h1>
            {TodoItemsFromOutside.map((item) => <TodoItem key={item.id} id={item.id} labelName={item.labelName}/>) }
           
    
    </div>
    )
ReactDOM.render(React.createElement(App), document.getElementById("root")); 