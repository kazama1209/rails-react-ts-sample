import React, { useState } from 'react';

interface TodoFormProps {
  getTodos: GetTodos;
}

export const TodoForm: React.FC<TodoFormProps> = ({ getTodos }) => {
  const [title, setTitle] = useState<string>('');

  const createTodo = (e: React.FormEvent<HTMLFormElement>) => {
    fetch('http://localhost:3000/api/v1/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
      })
    })
    .then((response) => {
      return response.json();
    })
    .then(() => {
      getTodos();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setTitle('');
    });

    e.preventDefault();
  }

  return (
    <form onSubmit={createTodo}>
      <input
        type='text'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <input type='submit' value='Add' disabled={!title} />
    </form>
  );
};
