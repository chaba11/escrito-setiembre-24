import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { useRouteError } from 'react-router-dom'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from "./pages/ErrorPage.jsx";
import { Usuario } from "./pages/Usuario.jsx";
import { UsuarioPais } from "./pages/UsuarioPais.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/usuarios:",
        element: <Usuario />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/usuarios/:PAIS",
        element: <UsuarioPais />,
        errorElement: <ErrorPage />,
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
