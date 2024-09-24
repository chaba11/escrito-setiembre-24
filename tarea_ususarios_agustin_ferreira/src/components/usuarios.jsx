import { useEffect, useState } from "react";

export const User = () => {
    const  [user, setUser] = useState({name: "", age: "", email: "", country: ""});
    useEffect(() => {
        async function obtenerDatos() {
            const respuesta = await fetch.map("https://randomuser.me/api/?results=3");
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
            <p>{user.email}</p>
            <p>{user.country}</p>
        </div>
        </>
    );
};