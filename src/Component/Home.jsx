import React, { useEffect, useState } from 'react'
import Task from './Task'

const Home = () => {
  const initialArr = localStorage.getItem("tasks")
  ?JSON.parse(localStorage.getItem("tasks"))
  :[]
  const[tasks,setTasks] = useState(initialArr);
  const[title,setTitle]= useState("");
  const[desc,setDesc] = useState("");
  // console.log(title);
  // console.log(desc);

  const submitHandler=(e)=>{
    e.preventDefault();
    setTasks([...tasks,{title:title,desc:desc}]);
    setTitle("")
    setDesc("")
    
  }
  const deleteTask = (index)=>{
    const filteredArr = tasks.filter((val,ind)=>{
      return ind !== index;
    })
    setTasks(filteredArr)
    //console.log(filteredArr)
  }
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks))
  }, [tasks])
    
  

  return (
    <div className="container">
        <h1>Daily Goals</h1>
    <form onSubmit={submitHandler}>
        <input type="text" placeholder='title' value={title} onChange={(e)=>{return(setTitle(e.target.value))}}/>
        <textarea placeholder='description' value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
        <button type="submit">Add</button>
    </form>

    {tasks.map((item,index)=>{
      return (
      <Task 
        key={index} 
        title={item.title} 
        desc={item.desc}
        deleteTask={deleteTask}
        index={index}
      />
      )
    })}

    </div>
  )
}

export default Home