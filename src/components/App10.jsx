import React, { useState, useRef, useEffect } from 'react';

export default function App10() {
    const [number, setNumber] = useState(0);
    const numRef = useRef(0);
    const divRef = useRef();

    useEffect(() => {
        if (numRef.current > number) {
            divRef.current.style.color = "red";
        } else if (numRef.current < number) {
            divRef.current.style.color = "green";
        }
        numRef.current = number;
    }, [number]);

    return (
        <div>
            <h2>THIS IS APP10(CLONE OF APP9)</h2>
            <input 
                type="number" 
                onChange={(e) => setNumber(Number(e.target.value))}
                placeholder='Enter number'
            />
            <br />
            <div>
                <p ref={divRef}>{numRef.current} - {number}</p>
            </div>
        </div>
    );
}
