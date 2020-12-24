import React from 'react';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  getTodos: GetTodos;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, getTodos }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Todos</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          todos.map((todo, index) => {
            return (
              <TodoItem
                key={index}
                todo={todo}
                getTodos={getTodos}
              />
            );
          })
        }
      </tbody>
    </table>
  );
};
