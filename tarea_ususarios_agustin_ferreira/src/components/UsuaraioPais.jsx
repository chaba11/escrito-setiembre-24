import { useEffect, useState } from "react";

export const UserPais = () => {
    const  [user, setUser] = useState({name: "", age: 0});
    useEffect(() => {
        async function obtenerDatos() {
            const respuesta = await fetch("https://randomuser.me/api/?results=3");
            const datos = await respuesta.json();
            setUser(datos);
        }
        obtenerDatos()
    });
    return (
        <>
        <div id = "user">
            <h2>User info</h2>
            <p>{user.name}</p>
            <p>{user.age}</p>
        </div>
        </>
    )
}