import { useState } from "react";
import HOC from "./withCounter";
function ClickCounter() {
    const [count, setCount] = useState(0); //default value of this state will be 0.
    return (
      <div>
        {/*When clicked, increment the value of 'count'*/}
        <button onClick={() => setCount((count) => count + 1)}>Increment</button>
        <p>Clicked: {count}</p> {/*Render the value of count*/}
      </div>
    );
  }
  export default HOC(ClickCounter);
  