import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";
import UsersWithHook from "../UsersWithHook";

type User = {
  id: number;
  name: string;
  username: string;
};

// same as User.test.tsx

const mockUserList: User[] = [
  { id: 1, name: "Dan", username: "Dan" },
  { id: 2, name: "Peter", username: "Pete" },
  { id: 3, name: "Jonathan", username: "Joe" },
];

const server = setupServer(
  rest.get(
    "https://jsonplaceholder.typicode.com/users",
    async (req, res, ctx) => res(ctx.json(mockUserList))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("rendering users with response data", async () => {
  render(<UsersWithHook />);

  const userList = await waitFor(() => screen.findAllByLabelText("username"));
  expect(userList.length).toBe(mockUserList.length);
  expect(userList[0]).toHaveTextContent(mockUserList[0].name);
});
