import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "../App.css";
import Form from "./Form";
import TodoList from "./TodoList";
import Category from "./AddCategory"
import CatList  from './CatList'
import MyTodoList from './MyTodoLit'
function TodoApp() {
  const [inputText, setInputText] = useState("");
  const [inputTextCat, setInputTextCat] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterTodos, setFilterTodos] = useState([]);
  const [category, setCategory] = useState([]);
  const [catOption,setCatOption] = useState('')
  const [final,setFinal] =useState({})

  useEffect(() => {
    getLocalTodos();
    getLocalCategory();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status,category]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const todoLocal = JSON.parse(localStorage.getItem("cat"));
      // console.log(todoLocal);
      //  setTodos(todoLocal)
    }
  };
  const getLocalCategory = () => {
    if (localStorage.getItem("cat") === null) {
      localStorage.setItem("cat", JSON.stringify([]));
    } else {
      const todoLocal = JSON.parse(localStorage.getItem("todos"));
      console.log(todoLocal);
      setTodos(todoLocal);
    }
  };
  let taskObj={}
  for(let i=0;i<todos.length;i++){
      let val = todos[i]['option']
    
      if(taskObj[val]===undefined){
          taskObj[val] =[]
      }
     
      taskObj[val].push(todos[i])
     
  }
  console.log(todos)
  
  return (
    <div className="App">
      <header>Todo List</header>
      <Category   inputTextCat={inputTextCat} setInputTextCat={setInputTextCat} category={category} setCategory={setCategory}/>
     
      <CatList category={category} catOption={catOption} setCatOption={setCatOption}/>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
        catOption={catOption}
       setFinal={setFinal}
      />
     
      
       
      {/* <TodoList setTodos={setTodos} todos={todos} filterTodos={filterTodos} category={category} catOption={catOption} /> */}
      <MyTodoList taskObj={taskObj} setTodos={setTodos} todos={todos} filterTodos={filterTodos} category={category} catOption={catOption}/>
     
    </div>
  );
}

export default TodoApp;
