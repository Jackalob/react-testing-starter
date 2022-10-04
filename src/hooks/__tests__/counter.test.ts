import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../counter";

test("increment is working", () => {
  const data = { value: 1, step: 5 };
  const { result } = renderHook(() => useCounter(data));

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(6);
});
