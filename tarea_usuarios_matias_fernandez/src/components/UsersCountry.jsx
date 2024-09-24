import { useState } from "react";
import { useParams } from "react-router-dom";

export const UsersCountry = () => {
  const [users, setUsers] = useState([]);
  const { pais } = useParams();

  const url = `https://randomuser.me/api/?nat=${pais}`;

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

  return (
    <div className="UserCard">
      <button onClick={handleClick}>
        Traer usuarios con nacionalidad: {pais}
      </button>
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
