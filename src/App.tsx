import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterWithHook from "./components/CounterWithHook";

function App() {
  return (
    <div className="App">
      <div>
        <h3>Counter: </h3>
        <Counter />
      </div>
      <div>
        <h3>Counter With Hook: </h3>
        <CounterWithHook />
      </div>
    </div>
  );
}

export default App;
