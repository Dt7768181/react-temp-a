import React from 'react'
import Parent from'./parent'
import Child1 from './Child1'
import Child2 from './Child2'
export default function App14() {
  return (
    <div>
        <h2>THIS IS APP14</h2>
        <Parent>
            <Child1/>
            <Child2/>
        </Parent>
    </div>
  )
}
