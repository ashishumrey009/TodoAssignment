
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import TodoApp from './components/TodoApp'
import Category from './components/AddCategory' 
const Routes =() =>{
    return(
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={TodoApp} />
          <Route path="/category" component={Category}/>
          </Switch>
          </BrowserRouter>
    
    )
}
export default Routes