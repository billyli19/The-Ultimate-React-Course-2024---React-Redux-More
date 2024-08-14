import { useState } from "react";

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

  function incrementStep() {
    setStep((step) => step + 1);
  }

  function decrementStep() {
    setStep((step) => step - 1);
  }

  function incrementCounter() {
    setCount((count) => count + step);
  }

  function decrementCounter() {
    setCount((count) => count - step);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div className="step">
        {/* <button onClick={decrementStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={incrementStep}>+</button> */}

        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div className="count">
        {/* <button onClick={decrementCounter}>-</button>
        <span>Count: {count}</span>
        <button onClick={incrementCounter}>+</button> */}

        <button onClick={decrementCounter}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={incrementCounter}>+</button>
      </div>
      {console.log("count", count)}
      <p>
        <span>
          {count === 0 ? `Today is ${date.toDateString()}` : ""}
          {count > 0
            ? `${count} days from today is ${date.toDateString()}`
            : ""}
          {count < 0
            ? `${Math.abs(count)} days ago is ${date.toDateString()}`
            : ""}
        </span>
      </p>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}
