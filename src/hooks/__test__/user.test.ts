import { renderHook, waitFor, act } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { useUsersData } from "../user";

type User = {
  id: number;
  name: string;
  username: string;
};

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

test("fetching user data successfully", async () => {
  const { result } = renderHook(() => useUsersData());

  await waitFor(() => {
    expect(result.current.length).toBe(mockUserList.length);
  });
  expect(result.current[0]).toEqual(mockUserList[0]);
});
