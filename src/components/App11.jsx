import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function App11() {
    const navi1=useNavigate();
    const navi=()=>{

        navi1("/App5")
    }
  return (
    <div>
        <h2>THIS IS APP11</h2>
        <button onClick={navi}>GO TO APP5</button>
    </div>
  )
}
