import React, { useState,useRef } from 'react';

export default function App9() {
  const [color, setColor] = useState('');

  const txtRef = useRef();
  const handleSubmit = () => {
    txtRef.current.style.color = color
  }

  return (
    <div>
      <h2>THIS IS APP9</h2>
      <input type="text" onChange={(e) => setColor(e.target.value)} placeholder="Enter color or hex with #"/>
      <button onClick={handleSubmit}>Submit</button>
      <h1  ref={txtRef} id="test">HELLO WORLD</h1>
    </div>
  );
}
