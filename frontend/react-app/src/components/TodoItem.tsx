import React from 'react';

interface TodoItemProps {
  todo: Todo;
  getTodos: GetTodos;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, getTodos }) => {
  const deleteTodo = (id: number) => {
    fetch(`http://localhost:3000/api/v1/todos/${todo.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((response) => {
      return response;
    })
    .then(() => {
      getTodos();
    })
    .catch((error) => {
      console.error(error);
    });
  }

  return (
    <tr>
      <td>{todo.title}</td>
      <td>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </td>
    </tr>
  );
};
