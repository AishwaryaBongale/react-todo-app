import React, { useState } from "react";

export const EditTodoForm = ({ editTask, task }) => {
  const [value, setValue] = useState(task.task);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(value, task.id);
  };
  return (
    <form className="EditForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="Update Task?"
        onChange={handleChange}
      />

      <button type="submit" className="todo-button">
        Update Task
      </button>
    </form>
  );
};
