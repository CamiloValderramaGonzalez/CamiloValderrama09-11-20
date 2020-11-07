import { Router } from "express";
import * as todoCtrl from "./todo.controller";

const router = Router();

router.get("/todos", todoCtrl.getTodos);

router.get("/todos/:id", todoCtrl.getTodo);

router.post("/todos", todoCtrl.insertTodo);

router.put("/todos/:id", todoCtrl.updateTodo);

router.delete("/todos/:id", todoCtrl.deleteTodo);

export default router;
