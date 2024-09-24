
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Usuarios from "./components/Usuarios";
import UsuarioPorPais from "./components/UsuarioPais";
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/usuarios">Ver usuarios</Link>
          <Link to="/usuarios/es">Ver usuario por país (España)</Link>
          <Link to="/usuarios/br">Ver usuario por país (Brasil)</Link>
          <Link to="/usuarios/us">Ver usuario por país (EEUU)</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/usuarios/:pais" element={<UsuarioPorPais />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
