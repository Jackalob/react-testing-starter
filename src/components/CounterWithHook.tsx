import React from "react";
import { useCounter } from "../hooks/counter";

type IProps = {
  value?: number;
  step?: number;
};

const Counter = ({ value = 0, step = 1 }: IProps = {}) => {
  const { count, increment } = useCounter({ value, step });
  return <button onClick={increment}>Count is {count}</button>;
};

export default Counter;
