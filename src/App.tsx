import React, { useState } from "react";
import { Button, Box, TextField } from "@material-ui/core";

import "./App.css";
import flask from "./flask.png";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const saveTodo = () => {
    const existingTodos = todos;
    existingTodos.push(newTodo);

    setTodos(existingTodos);
    setNewTodo("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={flask} className="App-logo" alt="logo" />

        <h1>Todo-Driven Development</h1>
      </header>

      <TodoList todos={todos}></TodoList>

      <Box pt={3}>
        <TextField
          label="Add a new item"
          value={newTodo}
          onChange={handleChange}
        />
        <Button variant="contained" size="large" onClick={saveTodo}>
          Save
        </Button>
      </Box>
    </div>
  );
}

export default App;
