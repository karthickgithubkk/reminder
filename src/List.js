import React, {useState} from 'react'

const List = ({list,deleteUser}) => {
  return (
    <>
    <h3> {list.length} Birthday today </h3>
    {list.map((item)=> {
        const {id,name,age,image} = item;
        return(
          <article key={id}  className="person">
         <img src={image} alt= {name} />
<div>
    <h4> {name} </h4>
    <h4> {age} </h4>
    <button className="btn-delete" type= "button" onClick={()=> {deleteUser(id)}}  >Delete </button>
</div>


          </article>  
        )
    })}
    </>
  )
}

export default List