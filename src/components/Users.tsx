import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    window
      .fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, []);

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

export default Users;
