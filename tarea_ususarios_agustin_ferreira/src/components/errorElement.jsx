import { useRouteError } from "react-router-dom"

export const errorPage = () =>{
    const error = useRouteError()
    console.error(error)
    
    return(
        <>
        <div>
            <h1>Error</h1>
            <h3>Intentaste acceder a una ruta incorrecta de nuestra web</h3>
        </div>
        </>
    )
}