import React, { useEffect, useState } from "react";
import Todo from "../components/Todo";

function Todos() {
  const userId = JSON.parse(localStorage.getItem("currentUser")).id;
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/todos?userId=${userId}`)
      .then((data) => data.json())
      .then((todos) => {
        setTodos(todos);
      });
  }, [ ]);

  return (
    <div className="content">
      <select
        name="todos"
        id="todos"

        onChange={(e) => {
            const sortedTodos = Array.from(todos);
            switch (e.target.value) {
              case "status":
                setTodos(sortedTodos.sort((a, b) => a.completed - b.completed));
                break;
              case "az":
                setTodos(sortedTodos.sort((a, b) => a.title.localeCompare(b.title)));
                break;
              case "za":
                setTodos(sortedTodos.sort((a, b) => b.title.localeCompare(a.title)));
                break;
              case "id":
                setTodos(sortedTodos.sort((a, b) => a.id - b.id));
                break;
              default:
                break;
            }
          }}
      >
        <option value={"id"}>by id</option>
        <option value={"az"}>by A-Z</option>
        <option value={"za"}>by Z-A</option>
        <option value={"status"}>by status</option>
      </select>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  );
}

export default Todos;
