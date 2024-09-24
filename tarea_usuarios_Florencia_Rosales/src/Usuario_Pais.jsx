import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UsuarioPais() {
  const { pais } = useParams(); 
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?nat=${pais}`)
      .then(response => response.json())
      .then(data => setUsuario(data.results[0]))
  }, [pais]);


  return (
    <div>
      <h2>Usuario de {pais.toUpperCase()}</h2>
      <img src={usuario.picture.medium} alt="Foto de perfil" />
      <p>Nombre: {usuario.name.first} {usuario.name.last}</p>
      <p>Email: {usuario.email}</p>
      <p>País: {usuario.location.country}</p>
    </div>
  );
}

export default UsuarioPais;
