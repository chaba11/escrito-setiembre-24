import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Nav } from './components/Nav';
import UserList from './components/UserList';
import UserByCountry from './components/UserByCountry';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/usuarios" element={<UserList />} />
          <Route path="/usuarios/:country" element={<UserByCountry />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
