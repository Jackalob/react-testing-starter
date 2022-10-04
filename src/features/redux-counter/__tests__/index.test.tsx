import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import ReduxCounter from "../index";
import { createStore } from "../../../store";

// ensure the store is clean in every single test

test("increment and decrement value when buttons are clicked", () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );

  const increment = screen.getByRole("button", { name: /Increment value/i });
  const decrement = screen.getByRole("button", { name: /Decrement value/i });
  const count = screen.getByRole(/value/i);

  expect(count).toHaveTextContent("0");
  userEvent.click(increment);
  expect(count).toHaveTextContent("1");
  userEvent.click(decrement);
  expect(count).toHaveTextContent("0");
});

test("step properties are working", () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter step={5} />
    </Provider>
  );

  const increment = screen.getByRole("button", { name: /Increment value/i });
  const decrement = screen.getByRole("button", { name: /Decrement value/i });
  const count = screen.getByRole(/value/i);

  expect(count).toHaveTextContent("0");
  userEvent.click(increment);
  expect(count).toHaveTextContent("5");
  userEvent.click(decrement);
  expect(count).toHaveTextContent("0");
});
