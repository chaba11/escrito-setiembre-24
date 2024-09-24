import { useState } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);

  const url = "https://randomuser.me/api/?results=3";

  const handleClick = () => get3Users();
  const get3Users = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        return console.log("algo salio mal");
      }
      const data = await response.json();

      setUsers(data);
    } catch (errors) {
      return console.error(errors);
    }
  };
  console.log(users.results);
  return (
    <div className="UserCard">
      <button onClick={handleClick}>Traer usuarios</button>
      {users.results?.map((user) => (
        <>
          <section className="usersCard" key={user.cell}>
            <div>
              Nombre: {user.name.first} {user.name.last}
            </div>
            <div> Email: {user.email}</div>
            <div>Pais: {user.location.country}</div>
            <img src={user.picture.medium} />
          </section>
        </>
      ))}
    </div>
  );
};
