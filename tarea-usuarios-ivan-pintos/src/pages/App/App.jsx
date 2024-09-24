import { Link } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <div>
        <p>This is the root page</p>
      </div>
      <div>
        <Link to={`usuarios`}>Ver usuarios</Link>
        <Link to={`usuarios/pais`}>Ver por pais </Link>
      </div>
    </>
  )
}

export default App
