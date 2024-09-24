import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Inicio</h1>
      <nav>
        <ul>
          <li><Link to="/usuarios">Ver usuarios</Link></li>
          <li><Link to="/usuarios/es">Ver usuario por país (ES)</Link></li>
          <li><Link to="/usuarios/br">Ver usuario por país (BR)</Link></li>
          <li><Link to="/usuarios/us">Ver usuario por país (US)</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;