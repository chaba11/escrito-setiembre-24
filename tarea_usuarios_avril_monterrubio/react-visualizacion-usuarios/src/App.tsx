
import React from 'react';
import { createBrowserRouter, RouterProvider, Link, Route, Routes } from 'react-router-dom';
import Usuarios from './Usuarios.js';
import UsuarioPorPais from './UsuarioPais';
import Home from './home';

const App: React.FC = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/usuarios">Ver usuarios</Link>
        <Link to="/usuarios/es">Ver usuario por país (España)</Link>
        <Link to="/usuarios/br">Ver usuario por país (Brasil)</Link>
        <Link to="/usuarios/us">Ver usuario por país (EEUU)</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/:pais" element={<UsuarioPorPais />} />
      </Routes>
    </div>
  );
};

export default App;
