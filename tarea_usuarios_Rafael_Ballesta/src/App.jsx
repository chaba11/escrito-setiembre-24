import './App.css'

function App() {

    return (
        <>
            <h1> Bienvenido a la pagina para ver Usuarios</h1>
            <div style={{width: "200px", height: "90vh", padding: "20px", backgroundColor: "skyblue"}}>
                <h1>Menú</h1>
                <ul>
                    <li><a href="/usuarios:">Usuarios</a></li>
                    <li><a href="/usuarios/br">Usuarios por pais</a></li>
                </ul>
            </div>
        </>
    )
}

export default App
