import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserByCountry.css';  

const UserByCountry = () => {
  const { country } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?nat=${country}`)
      .then(response => response.json())
      .then(data => setUser(data.results[0]))
      .catch(error => console.error(error));
  }, [country]);

  return (
    <div className="user-container">
      <h2 className="user-title">Usuario de {country.toUpperCase()}</h2>
      {user ? (
        <div className="user-card">
          <img src={user.picture.medium} alt={user.name.first} className="user-image" />
          <p className="user-name">Nombre: {user.name.first} {user.name.last}</p>
          <p className="user-email">Email: {user.email}</p>
          <p className="user-country">País: {user.location.country}</p>
        </div>
      ) : (
        <div>Cargando...</div>
      )}
    </div>
  );
};

export default UserByCountry;
