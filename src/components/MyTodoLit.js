import React from 'react'
import ShowList from './showLost'
import Todo from './Todo'
export default function MyTodoLit({taskObj,todos,setTodos,filterTodos,category,catOption}) {
    
    
   
   
    return (
        <div className="container">
        <div>
            {Object.keys(taskObj).map((i)=><div><div class="jumbotron jumbotron-fluid  bg-secondary">
  <div class="container">
    <h1 class="display-4">{i}</h1>
        <ShowList data={taskObj[i]} todos={todos} setTodos={setTodos} />
  </div>
</div></div>)}
        </div>
          
        </div>
    )
}
