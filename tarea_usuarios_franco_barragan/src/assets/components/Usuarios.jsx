import { useEffect, useState } from 'react';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=3')
      .then(response => response.json())
      .then(data => setUsuarios(data.results));
  }, []);

  return (
    <div className="usuarios">
      <h2>Lista de Usuarios</h2>
      <div className="usuarios-list">
        {usuarios.map(usuario => (
          <div key={usuario.login.uuid} className="usuario">
            <img src={usuario.picture.medium} alt={usuario.name.first} />
            <h3>{`${usuario.name.first} ${usuario.name.last}`}</h3>
            <p>Email: {usuario.email}</p>
            <p>País: {usuario.location.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Usuarios;
