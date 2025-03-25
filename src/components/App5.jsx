import { useEffect, useState } from "react";
export default function App5(){
    const [todo,setTodo]=useState([]);
    const [task,setTask]=useState();
    const handletodo=()=>{
        setTodo([...todo,task]);
    }
    const unhandletodo=(task)=>{
        setTodo(todo.filter((value)=>task!==value));
    }
    useEffect(()=>{
        handletodo();
    },[task])
    return(
        <div>
            <h2>THIS IS APP5</h2>
            <input type="text" onChange={(e)=>setTask(e.target.value)} placeholder="Enter Task....."/>
            {/* <button onClick={handletodo}>ENTER IT</button> */}
            <br/>
            {todo.map((value, index) => (<li key={index}>{value}<button onClick={()=>unhandletodo(value)}>Remove</button></li>))}
        </div> 
    )
}