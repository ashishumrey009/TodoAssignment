import React from 'react'
import TodoList from './TodoList'
import { useHistory } from "react-router"
const Form =({setInputText,setTodos,todos,inputText,setStatus,catOption,setFinal}) =>{
  const history = useHistory()
  
    const inputTextHandler = (e)=>{
      console.log(e.target.value)
      setInputText(e.target.value)
    } 
    const submitTodohandler=(e)=>{
      e.preventDefault() 
      setTodos([...todos,{option:catOption,text:inputText,completed:false,id:Math.random()*1000}])
      setInputText('')
      console.log(todos)
     
    }
    const statusHandler =(e)=>{
      console.log(e.target.value)
      setStatus(e.target.value)
    }
    
  
    return(
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" placeholder='task name'/>
        <button onClick={submitTodohandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
       
        {/* <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div> */}
        
      </form>
    )
}
export default Form