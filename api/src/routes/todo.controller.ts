import { RequestHandler } from "express";
import Todo from "./todo";

export const getTodo: RequestHandler = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.json(todo);
};

export const getTodos: RequestHandler = async (req, res) => {
  const todo = await Todo.find();
  res.json(todo);
};

export const updateTodo: RequestHandler = async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedTodo);
};

export const insertTodo: RequestHandler = async (req, res) => {
    const todo = new Todo(req.body);
    const savedTodo = await todo.save();
    res.json(savedTodo);
  };

export const deleteTodo: RequestHandler = async (req, res) => {
  const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
  if (!deletedTodo) {
    return res.status(204).json();
  }
  return res.json(deletedTodo);
};
