import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Usuarios from './assets/components/Usuarios';
import UsuarioPais from './assets/components/UsuariosPais';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/usuarios">Ver usuarios</Link></li>
            <li><Link to="/usuarios/es">Ver usuario por país</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/usuarios/:pais" element={<UsuarioPais />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
