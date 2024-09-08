import React, { useState } from "react";
import "../Todo.css"
function Todo(props) {
  const [completed, setCompleted] = useState(props.completed);
  const checkHandler = () => {
    fetch(`http://localhost:8000/todos/${props.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: !completed,
      }),
    });
    setCompleted(!completed);
  };
  return (
    <div className={completed ? "todo completed" : "todo"} >
      <h1> {props.id}</h1>
      <h1>{props.title}</h1>
      <input
        type="checkbox"
        defaultChecked={completed}
        onClick={checkHandler}
      />
    </div>
  );
}

export default Todo;
