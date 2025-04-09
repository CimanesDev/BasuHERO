// components/UserProfile.js
import React from 'react';
import './UserProfile.css';
import avatar1 from '../assets/avatars/2x2.jpg';

const avatarOptions = [
  { id: 1, src: avatar1 },
  { id: 2, src: avatar1 }, // Replace with actual different avatars if available
  { id: 3, src: avatar1 },
  { id: 4, src: avatar1 }
];

const UserProfile = ({ user }) => {
  const selectedAvatar = avatarOptions.find(avatar => avatar.id === user.avatar)?.src || avatar1;
  
  return (
    <div className="user-profile">
      <div className="user-avatar">
        <img src={selectedAvatar} alt="User Avatar" />
      </div>
      <div className="user-info">
        <h2>{user.name}</h2>
        <div className="user-stats">
          <div className="user-stat">
            <span className="stat-icon">🗑️</span>
            <div className="stat-detail">
              <h3>Trash Thrown</h3>
              <p>{user.trashPoints}</p>
            </div>
          </div>
          <div className="user-stat">
            <span className="stat-icon">🏆</span>
            <div className="stat-detail">
              <h3>Leaderboard</h3>
              <p>{user.leaderboardPosition}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;