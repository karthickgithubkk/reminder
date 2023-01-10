import React,{useState} from 'react';
import data from "./data";
import List from "./List";
import "./App.css";

const App = () => {
  const [list,setList]= useState(data);
  const deleteUser= function(id){
    let updateUser = list.filter((ele)=> ele.id!==id)
    setList(updateUser)
  }
  
  return (
<main>
<section  className= "container"  >
<List list= {list} deleteUser={deleteUser}  />
<button onClick={()=> setList([])}> Clear All</button>
</section>

</main>
  )
}

export default App