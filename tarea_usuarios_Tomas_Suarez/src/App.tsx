import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Usuarios } from './pages/Usuarios';
import router from "./main"

function App() {
  return(
    <App>
      <router/>
    </App>

  );
}

export default App
