import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CounterWithHooks from "../CounterWithHook";

// same as Counter.test.tsx

test("increment value when button is clicked", async () => {
  render(<CounterWithHooks />);

  const button = screen.getByRole("button", { name: /Count is 0/i });
  expect(button).toBeInTheDocument();

  await userEvent.click(button);
  expect(button).toHaveTextContent(/Count is 1/i);
});

test("value and step properties are working", async () => {
  const value = 10;
  const step = 10;
  render(<CounterWithHooks value={value} step={step} />);

  const button = screen.getByRole("button", { name: "Count is " + value });
  expect(button).toBeInTheDocument();

  await userEvent.click(button);
  expect(button).toHaveTextContent(/Count is 20/i);
});
