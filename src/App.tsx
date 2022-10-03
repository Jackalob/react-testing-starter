import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterWithHook from "./components/CounterWithHook";
import ReduxCounter from "./features/redux-counter";
import Users from "./components/Users";
import UsersWithHook from "./components/UsersWithHook";

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
        <h3>Redux Counter: </h3>
        <ReduxCounter step={2} />
      </div>
      <div>
        <h3>Users: </h3>
        <Users />
      </div>
      <div>
        <h3>Users With Hook: </h3>
        <UsersWithHook />
      </div>
    </div>
  );
}

export default App;
