import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterWithHook from "./components/CounterWithHook";
import Users from "./components/Users";

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
      <div>
        <h3>Users: </h3>
        <Users />
      </div>
    </div>
  );
}

export default App;
