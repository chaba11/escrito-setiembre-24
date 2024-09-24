import { useEffect, useState } from "react";

export const UsuariosPais = () => {
 
    const [users, setUsers] = useState({ name: "", email: "", picture: "" , nat:"" });
    useEffect(() =>{

        async function obtenerDatos() {
            const respuesta = await fetch("https://randomuser.me/api/?nat=br")
            const datos = await respuesta.json();
            setUsers(datos)
        }
        obtenerDatos();
    })
    return(
        <div>
            <h1>Info Usuarios</h1>
            <p>{users.name}</p>
            <p>{users.email}</p>
            <p>{users.picture}</p>
            <p>{users.nat}</p>

        </div>
    );
}