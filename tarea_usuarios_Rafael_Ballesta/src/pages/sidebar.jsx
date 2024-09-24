export const Sidebar = () => {
    return (
        <div style={{width: "200px", height: "90vh" , padding: "20px",  backgroundColor: "skyblue"}}>
            <h1>Menú</h1>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/src/pages/Usuario">Usuario 1</a></li>
                <li><a href="/pokeFav">Mi pokeFav</a></li>
                <li><a href="/pokemon">Pokémon</a></li>
                <li><a href="/pokemon/:pokeID">Pokémon Elejido</a></li>
            </ul>
        </div>
    )
}