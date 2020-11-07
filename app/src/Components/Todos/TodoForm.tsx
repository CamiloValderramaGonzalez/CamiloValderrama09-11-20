import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import * as TodoService from "./TodoService";
import { Todo } from "./Todo";

type InputChange = ChangeEvent<HTMLInputElement>;

interface Params {
  id?: string;
}
const initialState = {
  todo: "",
  done: false,
};

const TodoForm = () => {
  const [todo, setTodo] = useState<Todo>(initialState);

  const history = useHistory();
  const params = useParams<Params>();
  const getTodo = async (id: string) => {
    const res = await TodoService.getTodoById(id);
    const { todo, done } = res.data;
    setTodo({ todo, done });
  };

  useEffect(() => {
    if (params.id) {
      getTodo(params.id);
    } else {
      setTodo(initialState);
    }
  }, [params.id]);

  const handleInputChange = (e: InputChange) =>
    setTodo({ ...todo, [e.target.name]: e.target.value });

  const handleCheckboxChange = (e: InputChange) =>
    setTodo({ ...todo, done: e.target.checked });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!params.id) {
      await TodoService.createNewTodo(todo);
      setTodo(initialState);
    } else {
      await TodoService.updateTodo(params.id, todo);
    }
    history.push("/todos");
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card my-auto">
          <div className="card-body">
            <h3>Nuevo To Do</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="todo"
                  placeholder="Escriba el TO DO"
                  className="form-control"
                  autoFocus
                  onChange={handleInputChange}
                  value={todo.todo}
                />
              </div>

              <div className="form-group">
                <input
                  name="done"
                  type="checkbox"
                  className="form-control"
                  onChange={handleCheckboxChange}
                  checked={todo.done}
                ></input>
              </div>
              {params.id ? (
                <button className="btn btn-info">Actualizar</button>
              ) : (
                <button className="btn btn-info">Crear</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
