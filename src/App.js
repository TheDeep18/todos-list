import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";

import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];

  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));

  }

  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo)

    setTodos(todos.filter((e) => {
      return e !== todo
    }));
    console.log("deleted", todos);
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  const addtodo = (title, desc) => {
    console.log('I am adding this todo', title, desc);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo])
    console.log(myTodo)
  }


  const [todos, setTodos] = useState([initTodo])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <>
      <Router>
        <Header title="MyTodosList" />
        <AddTodo addtodo={addtodo} />
        <Todos todos={todos} onDelete={onDelete} />
        <Footer />
      </Router>
    </>
  );
}

export default App;
<script crossorigin src="..."></script>

