import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootswatch/dist/darkly/bootstrap.min.css";

import TodoList from "./Components/Todos/TodoList";
import TodoForm from "./Components/Todos/TodoForm";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container p-4">
          <Switch>
            <Route exact path="/" component={TodoList} />
            <Route exact path="/todos" component={TodoList} />
            <Route path="/update/:id" component={TodoForm} />
            <Route path="/crear-todo" component={TodoForm} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
