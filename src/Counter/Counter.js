import React, { useState } from "react";
import "./Counter.css";
function Counter() {
  const [counterValue, setCounterVal] = useState(0);
  const [inputVal, setInputVal] = useState(1);

  const addToCounter = () => {
    setCounterVal(counterValue + inputVal);
  };
  const subtractToCounter = () => {
    setCounterVal(counterValue - inputVal);
  };
  return (
    <div className="App">
      <h3 data-testid="header">My Counter</h3>
      <h2
        className={`${counterValue >= 100 ? "green" : ""}
        ${counterValue <= -100 ? "red" : ""}`}
        data-testid="counter"
      >
        {counterValue}
      </h2>
      <button onClick={subtractToCounter} data-testid="subtract-btn">
        -
      </button>
      <input
        className="text-center"
        data-testid="input"
        type="number"
        value={inputVal}
        onChange={(e) => {
          setInputVal(parseInt(e.target.value));
        }}
      />
      <button onClick={addToCounter} data-testid="add-btn">
        +
      </button>
    </div>
  );
}

export default Counter;
