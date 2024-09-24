import { useEffect, userState } from 'react';

export const User = () => {
    const [user, setUser] = userState({name: "", email: "", profilePic: "", pais: ""})
    useEffect(() => [
        async function obtenerDatos() {
            const respuesta = await fetch("https://randomuser.me/api/?nat=br");
            const datos = await respuesta.json();
            setUser(datos); 
        },
        obtenerDatos()
    ]);
    return(
        <div>
            <h2>Informacion sobre el usuario</h2>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.profilePic}</p>
            <p>{user.pais}</p>
        </div>
    );
}