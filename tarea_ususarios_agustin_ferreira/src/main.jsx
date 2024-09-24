import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { UserPais } from './components/UsuaraioPais.jsx'
import { errorPage } from './components/errorElement.jsx'
import { User } from './components/usuarios.jsx'
import { HomePage } from './components/home.jsx'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter ([

  {
    path:"/",
    element: <HomePage/>,
    errorElement: <errorPage/>
  },
  {
    path:"/usuarios",
    element: <User/>,
    errorElement: <errorPage/>
  },
  {
    path:"/usuarios/:country",
    element: <UserPais/>,
    errorElement: <errorPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
