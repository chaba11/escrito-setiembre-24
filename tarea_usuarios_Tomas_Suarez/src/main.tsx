import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Usuarios } from './pages/Usuarios.tsx'
import { Home } from './pages/Home.tsx'
import { UsuariosPais } from './pages/UsuariosPais.tsx'

export const router = createBrowserRouter ([
{
  path: "/",
  element: <Home />
},
{
  path: "/usuarios:",
  element: <Usuarios/>
},
{
  path: "/usuariosPais:",
  element: <UsuariosPais/>
}
])

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
