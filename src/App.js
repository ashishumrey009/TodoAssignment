import React,{useState,useEffect} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import Form from './components/Form'
import Routes from "./routes";

function App() {
  return (
    <div className="App">
        <Routes />
    </div>
  );
}

export default App;
