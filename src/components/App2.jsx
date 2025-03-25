import { useState } from 'react'

export default function App2(){
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    return(
        <div>
            <h1>This is App2</h1>
            <button onClick={increment}>+</button>
            {count}
            <button onClick={decrement}>-</button>
        </div>
    )
}