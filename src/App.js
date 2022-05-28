import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import {  BrowserRouter,  Routes,  Route,  Link,} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.getItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("I am adding this todo ", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      let sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      des: desc,
    };
    console.log("new todo ", myTodo);
    setTodos([...todos, myTodo]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
    <BrowserRouter>
      <Header title="What to do?" search={false} />
      <Routes>
        <Route exact path="/" element={
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            </>
            }
         />
         <Route exact path="/about" element={
            <>
              <About />
            </>
            }
         />
      </Routes>

      
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
