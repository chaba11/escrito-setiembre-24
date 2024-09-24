import './Usuarios.css';
import React, { useState, useEffect } from "react";
import './Usuarios.css';

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => setUsuarios(data.results));
  }, []);

  return (
    <div className="usuarios-contenedor">
      <h2>Lista de Usuarios</h2>
      <div className="usuarios-grid">
        {usuarios.map((usuario, index) => (
          <div key={index} className="usuario-card">
            <img src={usuario.picture} alt="foto de perfil" />
            <h3>{`${usuario.name.first} ${usuario.name.last}`}</h3>
            <p>{usuario.email}</p>
            <p>{usuario.location.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Usuarios;
