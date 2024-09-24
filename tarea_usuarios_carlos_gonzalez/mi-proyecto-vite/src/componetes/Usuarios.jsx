import { useEffect, useState } from "react";

export const Usuarios = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://randomuser.me/api/?results=3");
      const data = await response.json();
      setUsers(data.results);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      {users.map((user, index) => (
        <div key={index}>
          <img src={user.picture.medium} alt="Usuario" />
          <p>Nombre: {user.name.first} {user.name.last}</p>
          <p>Email: {user.email}</p>
          <p>País: {user.location.country}</p>
        </div>
      ))}
    </div>
  );
};
