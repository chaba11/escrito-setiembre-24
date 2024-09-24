import { useEffect, useState, useRef } from "react";

 export const Usuarios = ({}) => {
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        async function obtenerUsuario() {
            const link = `https://randomuser.me/api/?results=3`;
            const respuesta = await fetch(link);
            const datos = await respuesta.json();
            setUsuario(datos);
            
        }
        obtenerUsuario();
    });
    return (
        <>
        <div> {datos} </div>
        <div> {usuario} </div>
   
        </>
         );
}