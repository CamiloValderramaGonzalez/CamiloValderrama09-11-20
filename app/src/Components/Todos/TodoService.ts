import axios from "axios";
import { Todo } from "./Todo";

const API = process.env.REACT_APP_API;

export const getTodos = async () => {
  return await axios.get<Todo[]>(`${API}/todos`);
};

export const getTodoById = async (id: string) => {
  return await axios.get<Todo>(`${API}/todos/${id}`);
};

export const createNewTodo = async (video: Todo) => {
  return await axios.post(`${API}/todos`, video);
};

export const deleteTodoById = async (id: string) => {
  return await axios.delete(`${API}/todos/${id}`);
};

export const updateTodo = async (id: string, video: Todo) => {
  return await axios.put(`${API}/todos/${id}`, video);
};
