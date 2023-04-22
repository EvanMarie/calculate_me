import { useState } from "react";

interface CounterProps {
  name: string;
}

function Counter(props: CounterProps) {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <p>Addend One: {count}</p>
      <button onClick={handleIncrement}>+ 1</button>
      <button onClick={handleDecrement}>- 1</button>
    </div>
  );
}

export default Counter;
