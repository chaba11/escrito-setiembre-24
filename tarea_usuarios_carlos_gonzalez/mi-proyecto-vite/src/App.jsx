
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './componetes/navbar';
import { Home } from './paginas/Home';
import { Usuarios } from './componetes/Usuarios';
import { UsuarioPorPais } from './componetes/usuariopais';

function App() {
  return (
    <div className='contenedor-app'>
      <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/usuarios/:pais" element={<UsuarioPorPais />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
