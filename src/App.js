import React, { useState } from "react";
import ReactDOM from "react-dom";
import TodoItem from "./TodoItem.js";

const TodoItemsFromOutside = [
  { id: "learn-react", labelName: "Learn React" },
  { id: "create-todo-app", labelName: "Create a todo app" },
  { id: "profit", labelName: "Profit" },
  { id: "have-fun", labelName: "Have fun" },
  { id: "prettier", labelName: "Prettier is awesome!" },
];

const App = () => {
  const [todos, setTodos] = useState(TodoItemsFromOutside);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodos = [
      ...todos,
      { id: newTodo.replace(" ", "-"), labelName: newTodo },
    ];
    setTodos(newTodos);
    setNewTodo("");
  };
  return (
    <div id="my-todo-app" className="my-todo-app">
      <h1>My to do app</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
      </form>
      {TodoItemsFromOutside.map((item) => {
        return (
          <TodoItem key={item.id} id={item.id} labelName={item.labelName} />
        );
      })}
    </div>
  );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
