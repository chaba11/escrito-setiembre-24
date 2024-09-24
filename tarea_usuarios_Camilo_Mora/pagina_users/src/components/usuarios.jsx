import { useEffect, useState } from "react";

function Usuarios() {
  const [users, setUsers] = useState({
    name: "",
    email: "",
    country: "",
    picture: "",
  });

  useEffect(() => {
    async function obtenerUsuario() {
      const respuesta = await fetch("https://randomuser.me/api/?results=3");
      const datos = respuesta.json();
      setUsers(datos);
    }
    obtenerUsuario();
  });

  return (
    <>
      users.map((name, email, picture, country) =>
      {
        <>
          <h1>Usuarios</h1>
          <h2>{users.name}</h2>
          <p>{users.email}</p>
          <img src={users.picture} />
          <p>{users.country}</p>
        </>
      }
      )
    </>
  );
}

export default Usuarios;
