
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './UsuarioPais.css';

function UsuarioPorPais() {
  const { pais } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?nat=${pais}`)
      .then((response) => response.json())
      .then((data) => setUsuario(data.results[0]));
  }, [pais]);


  return (
    <div className="usuario-pais-contenedor">
      <h2>Usuario de : {pais.toUpperCase()}</h2>
      <div className="usuario-card">
        <img src={usuario.picture.large} alt="foto de perfil" />
        <h3>{`${usuario.name.first} ${usuario.name.last}`}</h3>
        <p>{usuario.email}</p>
        <p>{usuario.location.country}</p>
      </div>
    </div>
  );
}

export default UsuarioPorPais;
