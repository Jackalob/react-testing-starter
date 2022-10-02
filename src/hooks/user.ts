import { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  username: string;
};

function useUsersData() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    window
      .fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, []);

  return users;
}

export { useUsersData };
