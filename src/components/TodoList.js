import React from 'react'
import Todo from './Todo'
const TodoList=({todos,setTodos,filterTodos,category,catOption})=> {
    console.log(filterTodos)
    return (
        <div className="todo-container">
      <ul className="todo-list">
          {/* <Todo /> */}
          {filterTodos.map(todo=>(<Todo  
          key={todo.id} 
          text={todo.text}  
          id={todo.id}
          todos={todos}
          setTodos={setTodos}
          todo={todo}
          catOption={todo.option}
          />))}
      </ul>
    </div>

    )
}
export default TodoList