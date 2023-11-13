import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);
  const handleIncrementStep = () => {
    setStep((curStep) => curStep + 1);
  };
  const handleDecrementStep = () => {
    setStep((curStep) => curStep - 1);
  };
  const handleIncrementCount = () => {
    setCount((curCount) => curCount + step);
  };
  const handleDecrementCount = () => {
    setCount((curCount) => curCount - step);
  };
  const handleReset = () => {
    setStep(1);
    setCount(0);
  };

  return (
    <>
      <input
        type="range"
        min="0"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <span>Step: {step}</span>
      {/* <div>
        <button onClick={handleDecrementStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleIncrementStep}>+</button>
      </div> */}
      <div>
        <button onClick={handleDecrementCount}>-</button>
        {/* <span>Count: {count}</span> */}
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={handleIncrementCount}>+</button>
      </div>
      <div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
            {date.toDateString()}
          </span>
        </p>
      </div>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}
