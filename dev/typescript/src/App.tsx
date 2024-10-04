import React, { useState } from 'react';
import './App.css';
import { addAPI } from './api/test';

function App() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  // クリックしたときにaddAPIを呼び出している。
  const handleClickEvent = async () => {
    const data = await addAPI(num1, num2);
    if (data !== undefined) {
      setResult(data);
    } else {
      console.log('Error: Could not get result');
    }
  };

  return (
    <div>
      <h1>FastAPI & React Communication</h1>
      <div>
        <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} placeholder="Enter first number" />
        <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} placeholder="Enter second number" />
      </div>
      <button onClick={handleClickEvent}>Add using POST</button>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}

export default App;
