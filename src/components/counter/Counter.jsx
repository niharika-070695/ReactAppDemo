import "./Counter.css";
import { useState } from "react";
function Counter() {
  var [state, setState] = useState(0);
  const increaseCount = () => {
    setState(state + 1);
    setState(state + 1);
    setState(state + 1);
  };
  return (
    <div className="counter">
      <h2>Counter App in React</h2>
      <p>Count value is: {state}</p>
      <button onClick={increaseCount}>increasecount</button>
    </div>
  );
}

export default Counter;
