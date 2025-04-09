// components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>BasuHERO</h1>
        </div>
        <div className="navbar-links">
          <button className="nav-link active">Home</button>
          <button className="nav-link">Quests</button>
          <button className="nav-link">Leaderboard</button>
          <button className="nav-link">Rewards</button>
          <button className="nav-link">Profile</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;