import { useUsersData } from "../hooks/user";

const UsersWithHook = () => {
  const users = useUsersData();

  return (
    <div data-testid="user-list">
      {users.map((user) => (
        <pre key={user.id} aria-label="username">
          {JSON.stringify(user.name)}
        </pre>
      ))}
    </div>
  );
};

export default UsersWithHook;
