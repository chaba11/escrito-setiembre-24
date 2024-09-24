import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Usuarios from "./components/usuarios.jsx";
import UsuarioXpais from "./components/usuarioXpais.jsx";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "/usuarios",
    element: <Usuarios />,
  },
  {
    path: "/usuarios/:pais",
    element: <UsuarioXpais />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
