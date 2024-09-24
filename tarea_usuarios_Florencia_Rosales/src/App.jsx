import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Usuarios from './Usuarios';
import UsuarioPais from './Usuario_Pais'; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul> 
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/usuarios">Ver Usuarios</Link></li>
            <li><Link to="/usuarios/es">Ver Usuario por País (España)</Link></li>
            <li><Link to="/usuarios/br">Ver Usuario por País (Brasil)</Link></li>
            <li><Link to="/usuarios/us">Ver Usuario por País (EE.UU.)</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/usuarios/:pais" element={<UsuarioPais />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
