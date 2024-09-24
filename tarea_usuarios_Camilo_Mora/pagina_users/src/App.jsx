import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate;

  return (
    <>
      <div className="w-full h-1/3 flex justify-center items-center">
        <h1 className="text-center bold">Pagina de Usuarios</h1>
      </div>
      <div className="">
        <a href="/usuarios">Usuarios</a>
        <a href="/usuarios/:pais">Usuarios</a>
      </div>
    </>
  );
}

export default App;
