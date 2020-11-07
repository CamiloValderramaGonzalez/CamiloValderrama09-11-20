import React from "react";
import { useHistory } from "react-router-dom";

import * as TodoService from "./TodoService";
import { Todo } from "./Todo";

import "./TodoItem.css";

interface Props {
  todo: Todo;
  loadTodos: () => void;
}

const TodoItem = (props: Props) => {
  const { todo, loadTodos } = props;
  const history = useHistory();

  const handleDelete = async (id: string) => {
    await TodoService.deleteTodoById(id);
    loadTodos();
  };

  return (
    <div
      className={
        "col-md-12 p-2 alert alert-dismissible alert-" +
        (todo.done ? "success" : "primary")
      }
    >
      <div className="card card-body todo-card animate__animated animate__backInUp">
        <div className="d-flex justify-content-between">
          <h5
            onClick={() => history.push(`/update/${todo._id}`)}
            style={{ cursor: "pointer" }}
          >
            {todo.todo}
          </h5>
          <span
            className="text-danger"
            style={{ cursor: "pointer" }}
            onClick={() => todo._id && handleDelete(todo._id)}
          >
            X
          </span>
        </div>
        <p
          onClick={() => history.push(`/update/${todo._id}`)}
          style={{ cursor: "pointer" }}
        >
          {todo.done ? "Realizada" : "Por Hacer"}
        </p>
      </div>
    </div>
  );
};

export default TodoItem;
