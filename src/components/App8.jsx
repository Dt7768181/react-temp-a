import React from "react";
import { useState, useEffect } from "react";
export default function App8() {
  const [numbers, setNumbers] = useState([]);
  const [number, setNumber] = useState(0);
  const [total, setTotal] = useState(0);
  const handleSubmit = () => {
    setNumbers([...numbers, number]);
  };
  useEffect(() => {
    setTotal(
      numbers.reduce((sum, value) => {
        return sum + Number(value);
      }, 0)
    );
  }, [numbers]);
  useEffect(()=>{
    handleSubmit();
  },[number])
  return (
    <div>
      <h3>THIS IS APP8</h3>
      <p>
        <input
          type="number"
          onChange={(e) => setNumber(e.target.value)}
        ></input>
        {/* <button onClick={handleSubmit}>Add</button> */}
      </p>
      {numbers && numbers.map((value) => <div>{value}</div>)}
      <hr></hr>
      Total:{total}
    </div>
  );
}