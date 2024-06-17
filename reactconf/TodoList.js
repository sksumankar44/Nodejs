// src/TodoList.js
import React, { useEffect, useState } from "react";
import { getTodosByUsername } from "./TodoService";

const TodoList = ({ username }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTodosByUsername(username)
      .then((response) => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Todo List for {username}</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
