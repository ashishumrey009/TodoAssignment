import React from 'react'
import { useHistory } from "react-router"
export default function AddCategory({setInputTextCat,setCategory,category,inputTextCat,setStatus}) {
    const history = useHistory()
    
    const handleCategory=(e)=>{
      setInputTextCat(e.target.value)
    }
    
    const addCategory =(e) =>{
        e.preventDefault()
        setCategory([...category,inputTextCat])
        setInputTextCat('')
    }
    return (
        <form>
        <input value={inputTextCat} onChange={handleCategory} type="text" className="todo-input" placeholder='Category name'/>
        <button onClick={addCategory} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
    )
}
