import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { UsuariosPais } from './Components/verUsuarioPais.jsx'
import { Usuarios } from './Components/verUsuarios.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
    children:[
      {
        path:"usuarios",
        element:<Usuarios/>
      },
      {
        path:"/usuarioPais/:usuarioPais",
        element:<UsuariosPais/>
      }
    ], }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
