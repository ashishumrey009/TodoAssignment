import React from 'react'
import Todo from './Todo'
export default function showLost({data,todos,setTodos,filterTodos,category,catOption}) {
    console.log(data)
    
    return (
        <div className="todo-container">
        <ul className="todo-list">
            {/* <Todo /> */}
            {data.map(todo=>(<Todo  
             key={todo.id} 
             text={todo.text}  
             id={todo.id}
             todos={todos}
             setTodos={setTodos}
            
            
            todo={todo}
            
            />))}
        </ul>
      </div>
    )
}
