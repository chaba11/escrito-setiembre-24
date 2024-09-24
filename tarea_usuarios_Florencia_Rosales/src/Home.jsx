import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Bienvenido</h1>
      <p>Usa los siguientes enlaces para navegar:</p>
      <ul>
        <li>
          <Link to="/usuarios">Ver Usuarios</Link>
        </li>
        <li>
          <Link to="/usuarios/es">Ver Usuario por País (España)</Link>
        </li>
        <li>
          <Link to="/usuarios/br">Ver Usuario por País (Brasil)</Link>
        </li>
        <li>
          <Link to="/usuarios/us">Ver Usuario por País (EE.UU.)</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
