import './App.css'

function Home() {
  return (
    <>
    <h1>Bienvenido</h1>
      <div>
        <a href='/usuarios' id='verUsuarios'>Ver usuarios</a>
      </div>
      <div>
        <a href='/usuarioPais/:'>Ver usuarios por pais</a>
      </div>
    </>
  )
}

export default Home
