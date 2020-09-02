import React from 'react'

export default function CatList({category,catOption,setCatOption}) {

    const catHandler =(e)=>{
        
        setCatOption(e.target.value)
    }
    return (
        <div>
            <form>
             {category.length >0 ?  <div className="select">
             select Category <select onChange={catHandler} name="todos" className="filter-todo">
                 <option>--------</option>
             {category.map(item=><option value={item}>{item}</option>)}
          </select>
          </div>:null
          }
       
        </form>
        </div>
    )
}
