import { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button data-cy="increment" onClick={() => setCounter(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
