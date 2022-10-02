import React, { useState } from "react";

type IProps = {
  value?: number;
  step?: number;
};

const Counter = ({ value = 0, step = 1 }: IProps) => {
  const [count, setCount] = useState(value);

  const handleClick = () => {
    setCount((v) => v + step);
  };

  return <button onClick={handleClick}>Count is {count}</button>;
};

export default Counter;
