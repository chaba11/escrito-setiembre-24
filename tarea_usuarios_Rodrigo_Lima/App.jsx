
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Usuarios from "./components/Usuarios";
import UsuarioPorPais from "./components/UsuarioPorPais";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/usuarios">Ver usuarios</Link></li>
            <li><Link to="/usuarios/es">Ver usuario por país</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/usuarios/:pais" element={<UsuarioPorPais />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
