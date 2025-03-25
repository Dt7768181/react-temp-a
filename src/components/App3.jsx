import { useState } from "react"
export default function App3(){
    const [email, setEmail]=useState();
    const [password, setPassword]=useState();
    const [msg, setMsg]=useState();
    const handleSubmit=()=>{
        if(email==="john@scam.com" && password==="1234"){
            setMsg("Welcome john")
        }else{
            setMsg("Access Denied")
        }
    }
    return(
        <div>
            <h2>THIS IS APP3</h2>
            {msg}
            <br/>
            <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
            <br/>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password"/>
            <br/>
            <br/>
            <button onClick={handleSubmit}>Login</button>
        </div>
    )
}