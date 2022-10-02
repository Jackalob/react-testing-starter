import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../Counter";

test("increment value when button is clicked", async () => {
  render(<Counter />);

  const button = screen.getByRole("button", { name: /Count is 0/i });
  expect(button).toBeInTheDocument();

  await userEvent.click(button);
  expect(button).toHaveTextContent(/Count is 1/i);
});

test("value and step properties are working", async () => {
  const value = 1;
  const step = 5;
  render(<Counter value={value} step={step} />);

  const button = screen.getByRole("button", { name: "Count is " + value });
  expect(button).toBeInTheDocument();

  await userEvent.click(button);
  expect(button).toHaveTextContent(/Count is 6/i);
});