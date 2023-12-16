import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todoList, setTodoLists] = useState([]);

  const addTodo = (todo) => {
    console.log("new::", todo);
    setTodoLists([
      ...todoList,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isediting: false,
      },
    ]);
    console.log("todos", todoList);
  };

  const toggleComplete = (id) => {
    setTodoLists(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoLists(todoList.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodoLists(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isediting: !todo.isediting } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodoLists(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, task, isediting: !todo.isediting } : todo
      )
    );
  };
  return (
    <div className="todo-wrapper">
      <h1>Plan for Today</h1>
      <TodoForm addTodo={addTodo} />

      {todoList.map((todo, index) =>
        todo.isediting ? (
          <EditTodoForm editTask={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
