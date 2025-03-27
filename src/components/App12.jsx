import React from 'react'
import Main from './Main'
import { useState } from 'react'
export default function App12() {
  const [page,setPage]=useState();
  return (
    <div>
      <h2>THIS IS APP12</h2>
      <button onClick={()=>setPage('a')}>A</button>
      <button onClick={()=>setPage('b')}>B</button>
      <Main c={page}/>
    </div>
  )
}
