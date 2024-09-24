import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Usuario = () => {
    const { usuarios } = useParams(); // Asegúrate de importar useParams
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        async function fetchUsuario() {
            try {
                const response = await fetch(`https://randomuser.me/api/?results=${usuarios}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUsuario(data);
            } catch (error) {
                console.error("Error fetching the users:", error);
            }
        }

        fetchUsuario();
    }, [usuarios]); // Añadí usuarioID como dependencia

    return (
        <div>
            <h1>Usuarios</h1>
            {usuario ? (
                <div>
                    <img src={usuario.picture} alt={usuario.name}/>
                    <p>Nombre: {usuario.name}</p>
                    <p>Email: {usuario.email}</p>
                    <p>Pais: {usuario.country}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};
