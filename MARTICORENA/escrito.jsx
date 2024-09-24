
Conversación abierta. 1 mensaje sin leer.

Ir al contenido
Uso de Correo de Ànima con lectores de pantalla

17 de 2.743
escrito usuario setimbre
Recibidos

Walter Marticorena <walter.marticorena@anima.edu.uy>
mar, 10 sept, 9:36 (hace 11 días)
para mí


import React, { useEffect, useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Inicio from './components/Inicio';
import Usuarios from './components/Usuarios';
import UsuarioPorPais from './components/UsuarioPorPais';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/usuarios">Ver Usuarios</Link>
            </li>
            <li>
              <Link to="/usuarios/es">Ver Usuario por País (España)</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/usuarios/:pais" element={<UsuarioPorPais />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=3')
      .then((response) => response.json())
      .then((data) => setUsuarios(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <div className="usuarios-grid">
        {usuarios.map((usuario, index) => (
          <div key={index} className="usuario">
            <img src={usuario.picture.large} alt={usuario.name.first} />
            <h2>{`${usuario.name.first} ${usuario.name.last}`}</h2>
            <p>Email: {usuario.email}</p>
            <p>País: {usuario.location.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usuarios;


function usuario({ id }) {
    import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UsuarioPorPais = () => {
  const { pais } = useParams();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?nat=${pais}`)
      .then((response) => response.json())
      .then((data) => setUsuario(data.results[0]))
      .catch((error) => console.error(error));
  }, [pais]);

  if (!usuario) {
    return <p>Cargando usuario...</p>;
  }

  return (
    <div>
      <h1>Usuario de {pais.toUpperCase()}</h1>
      <div className="usuario">
        <img src={usuario.picture.large} alt={usuario.name.first} />
        <h2>{`${usuario.name.first} ${usuario.name.last}`}</h2>
        <p>Email: {usuario.email}</p>
        <p>País: {usuario.location.country}</p>
      </div>
    </div>
  );
};

export default UsuarioPorPais;




export default App;
