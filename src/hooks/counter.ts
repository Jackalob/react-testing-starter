import { useState, useCallback } from "react";

type IProps = {
  value: number;
  step: number;
};

function useCounter({ value, step }: IProps) {
  const [count, setCount] = useState(value);
  const increment = useCallback(() => setCount((v) => v + step), [step]);

  return { count, increment };
}

export { useCounter };
