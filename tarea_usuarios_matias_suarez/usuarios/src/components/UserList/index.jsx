import React, { useEffect, useState } from 'react';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=3')
      .then(response => response.json())
      .then(data => setUsers(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="user-container">
      <h2 className="user-title">Lista de Usuarios</h2>
      <div className="users">
        {users.map((user, index) => (
          <div key={index} className="user-card">
            <img src={user.picture.medium} alt={user.name.first} className="user-image" />
            <p className="user-name">Nombre: {user.name.first} {user.name.last}</p>
            <p className="user-email">Email: {user.email}</p>
            <p className="user-country">País: {user.location.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
