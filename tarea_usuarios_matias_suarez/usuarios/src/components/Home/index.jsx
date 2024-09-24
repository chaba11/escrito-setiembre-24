import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

export const Home = () => {
  return (
    <div className='hero'>
      <h1>Bienvenido</h1>
      <div className='buttons'>
      <Link to="/usuarios"> <button> Ver usuarios </button></Link>
      <Link to="/usuarios/es"><button> Ver usuario por país</button></Link>
      </div>
    </div>
  );
};

