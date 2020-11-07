import React, { useEffect, useState } from "react";
import * as TodoService from "./TodoService";
import { Todo } from "./Todo";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);

  const loadTodos = async () => {
    const res = await TodoService.getTodos();

    const formatedTodos = res.data
      .map((todo: Todo) => {
        return {
          ...todo,
          createdAt: todo.createdAt
            ? new Date(todo.createdAt)
            : new Date(),
          updatedAt: todo.updatedAt
            ? new Date(todo.updatedAt)
            : new Date(),
        };
      })
      .sort((a: any, b: any) => b.createdAt.getTime() - a.createdAt.getTime());

    setTodos(formatedTodos);
    setLoading(false);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  if (loading)
    return (
      <div className="row">
        <div className="col-md-12 my-auto">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Cargando...</span>
          </div>
        </div>
      </div>
    );

  if (todos.length === 0) return <div>No hay TO DO aún</div>;

  return (
    <div className="row">
      {todos.map((todo) => (
        <TodoItem
        todo={todo}
          key={todo._id}
          loadTodos={loadTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
