import { useState } from "react"
export default function App4(){
    const[user,setUser]=useState({});
    const[msg,setMsg]=useState();
    const handleSubmit=()=>{
        if(user.email==="john@email.com" && user.password==="1234"){
            setMsg("Hello john")
        }else{
            setMsg("Access Denied")
        }
    }
    return(
        <div>
            <h2>THIS IS APP4</h2>
            {msg}
            <br/>
            <input type="text" onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="Enter email"/>
            <br/>
            <input type="password" onChange={(e)=>setUser({...user,password:e.target.value})} placeholder="Enter Password"/>
            <br/>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}