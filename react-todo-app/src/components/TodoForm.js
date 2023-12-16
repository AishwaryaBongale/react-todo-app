import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        tyoe="text"
        className="todo-input"
        value={value}
        placeholder="What is the task today?"
        onChange={handleChange}
      />

      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
