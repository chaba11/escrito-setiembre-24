import { Link } from 'react-router-dom'
import '../styles/home.css'
import { Outlet } from 'react-router-dom'

export const HomePage = () =>{
    
    return(
        <>
        <div>
            <h1>Hola Usuario</h1>
            <h3>Bienvenido a la home, accede a donde prefieras</h3>
            <p></p>
            <Link id="link1" to={`usuarios`}>Ver usuarios</Link>
            <Link id="link2" to={`usuarios/:Pais`}>Ver usuarios por pais</Link>
        </div>
        </>
    )
}