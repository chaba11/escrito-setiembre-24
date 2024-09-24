import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UsuarioPorPais = () => {
  const { pais } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`https://randomuser.me/api/?nat=${pais}=`);
      const data = await response.json();
      setUser(data.results[0]);
    }
    fetchUser();
  }, [pais]);

  if (!user) return <div>Cargando...</div>;

  return (
    <div className="usuario-contenedor">
      <h1  className="titulo">Usuario del país:{pais.toUpperCase()}</h1>
      <img  className="imagen-usuario" src={user.picture.medium} alt="imagen de el Usuario" />
      <p>Nombre: {user.name.first} {user.name.last}</p>
      <p>Email: {user.email}</p>
      <p>País: {user.location.country}</p>
    </div>
  );
};
