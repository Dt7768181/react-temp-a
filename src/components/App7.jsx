import { useState,useEffect } from "react"
export default function App7(){
    const [a,setA]=useState(0);
    const [b,setB]=useState(0);
    const [result,setResult]=useState(0);
    const sum=(a,b)=>{
        var as=parseInt(a)
        var bs=parseInt(b)
        setResult(as+bs)
    }
    const mul=(a,b)=>{
        var as=parseInt(a)
        var bs=parseInt(b)
        setResult(as*bs)
    }
    useEffect(()=>{
        sum(a,b);
    },[a])
    useEffect(()=>{
        mul(a,b);
    },[b])
    return(
        <div>
        <h2>THIS IS APP7</h2>
        <input type="number" onChange={(e)=>setA(e.target.value)}/>
        <br/>
        <input type="number" onChange={(e)=>setB(e.target.value)}/>
        <br/>
        {/* <button onClick={()=>sum(a,b)}>SUBMIT</button> */}
        <br/>
        {result}
        </div>
    )
}