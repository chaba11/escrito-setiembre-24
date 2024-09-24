import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UsuarioPais() {
  const { pais } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const nat = pais === 'es' || pais === 'br' || pais === 'us' ? pais : 'es';
    fetch(`https://randomuser.me/api/?nat=${nat}`)
      .then(response => response.json())
      .then(data => setUsuario(data.results[0]));
  }, [pais]);

  if (!usuario) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="usuario-por-pais">
      <h2>Usuario de {usuario.location.country}</h2>
      <div className="usuario">
        <img src={usuario.picture.medium} alt={usuario.name.first} />
        <h3>{`${usuario.name.first} ${usuario.name.last}`}</h3>
        <p>Email: {usuario.email}</p>
        <p>País: {usuario.location.country}</p>
      </div>
    </div>
  );
}

export default UsuarioPais;
