import { useEffect, useState } from 'react';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=3')
      .then(response => response.json())
      .then(data => setUsuarios(data.results))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            <img src={usuario.picture.medium} alt="Foto de perfil" />
            <p>Nombre: {usuario.name.first} {usuario.name.last}</p>
            <p>Email: {usuario.email}</p>
            <p>País: {usuario.location.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
