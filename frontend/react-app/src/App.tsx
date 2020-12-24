import React, { useState, useEffect } from 'react';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm';

const initialTodos: Todo[] = [];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    getTodos();
  }, [setTodos]);

  const getTodos = () => {
    fetch('http://localhost:3000/api/v1/todos')
    .then((response) => {return response.json()})
    .then((todos) => {setTodos(todos)});
  }

  return (
    <>
      <h1>Todo App</h1>
      <TodoForm getTodos={getTodos} />
      <TodoList todos={todos} getTodos={getTodos} />
    </>
  );
}

export default App;
