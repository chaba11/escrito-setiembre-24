import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

export const UsuariosPais = ({ onDataFetched }) => {
    const [usuario, setUsuario] = useState(null);
    const { usuarioPais } = useParams();

    useEffect(() => {
        async function obtenerUsuario() {
            const link = `https://randomuser.me/api/?nat=${usuarioPais}`;
            const respuesta = await fetch(link);
            const datos = await respuesta.json();
            setUsuario(datos);
            if (onDataFetched) onDataFetched(datos);
        }
        obtenerUsuario();
    }, [usuarioPais, onDataFetched]);
    return(
        <p> { usuario } </p>
    );
}
/*
function usuarioPais() {
    <p>{ usuario }</p>
}

export default usuarioPais
*/