import { useState } from "react";
import "./count.css";
function Count() {
  const [x, setX] = useState(0);

  return (
    <div className="container">
      <div className="container1">
        {x}
        <div className="buttons">
          <button onClick={() => setX(x + 1)}>Increment</button>

          <button onClick={() => setX(x - 1)}> Decrement</button>
        </div>
      </div>
    </div>
  );
}
export default Count;
