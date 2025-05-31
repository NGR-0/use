import { useState, useMemo } from "react";

function expensiveComputation() {
  console.log("Running expensive computation...");
  let result = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    result += i;
  }
  return result;
}

export default function USM() {
  const [count, setCount] = useState(1);
  const [toggle, setToggle] = useState(false);

  const computedValue = useMemo(() => {
    return expensiveComputation();
  }, []);

  // const computedValue = expensiveComputation();
  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Computed Value: {computedValue}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment Count</button>
      <button onClick={() => setToggle((t) => !t)}>
        Toggle: {toggle.toString()}
      </button>
    </div>
  );
}
