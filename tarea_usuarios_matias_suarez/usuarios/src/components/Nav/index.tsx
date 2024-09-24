import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

export const Nav = () => {
    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/usuarios">Ver usuarios</Link>
            <Link to="/usuarios/es">Ver usuario por país</Link>
        </nav>
    );
};

