import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="container">
      <div className="step">
        <button className="decrease" onClick={() => setStep((s) => s - 1)}>
          -
        </button>
        <h4>Step: {step}</h4>
        <button className="increase" onClick={() => setStep((s) => s + 1)}>
          +
        </button>
      </div>
      <div className="count">
        <button className="decrease" onClick={() => setCount((c) => c - step)}>
          -
        </button>
        <h4>Count: {count}</h4>
        <button className="increase" onClick={() => setCount((c) => c + step)}>
          +
        </button>
      </div>
      <br />
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
