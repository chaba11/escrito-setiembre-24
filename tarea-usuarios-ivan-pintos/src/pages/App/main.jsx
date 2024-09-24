import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorPage } from '../404/index.jsx'
import { Usuarios } from '../../components/Usuarios/index.jsx'
import { UsuarioPais } from '../../components/UsuarioPais/index.jsx'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: '/usuarios',
      element: <Usuarios />
    },
    {
      path: '/usuarios/:paisId',
      element: <UsuarioPais />
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
