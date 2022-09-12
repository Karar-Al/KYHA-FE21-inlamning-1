import { useState } from "react";

import Vector from "./assets/Vector.svg";
import Wave from "./assets/wave_1.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="surfboard-wrapper">
        <img src={Vector} className="surfboard" />
      </div>
      <img src={Wave} className="wave" />

      <div className="menu-wrapper">
        <div className="menu">
          <div className="centered grow flex-end stretch">
            <h1>ada</h1>
            <p className="font-subtitle">Surfboards</p>
          </div>

          <div className="grow flex-start stretch px-4">
            <button className="stretch">Products</button>
            <button className="stretch">About</button>
            <button className="stretch">FAQ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
