// components/Dashboard.js
import React, { useState } from 'react';
import './Dashboard.css';
import UserProfile from './UserProfile';
import Map from './Map';
import QuestsList from './QuestsList';
import AchievementsList from './AchievementsList';
import NewsSection from './NewsSection';

const Dashboard = ({ user }) => {
  const [activeQuests] = useState([
    { id: 1, type: 'Plastics', completed: 8, total: 12 },
    { id: 2, type: 'Biodegradable', completed: 4, total: 12 },
  ]);

  const [achievements] = useState([
    { id: 1, name: 'Be on the Leaderboard', icon: '🏆', unlocked: true },
    { id: 2, name: 'Convert Trash to Cash', icon: '💰', unlocked: true },
  ]);

  const [newsItems] = useState([
    { id: 1, title: 'Cleanup drive 2025!', date: '2 days ago', read: false },
  ]);

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="dashboard-main">
          <UserProfile 
            user={{
              ...user,
              trashPoints: 12,
              leaderboardPosition: 8
            }} 
          />
          <div className="map-section">
            <Map />
            <button className="button button-large">Search for Trash Quest</button>
          </div>
        </div>
        <div className="dashboard-sidebar">
          <QuestsList quests={activeQuests} />
          <AchievementsList achievements={achievements} />
          <NewsSection newsItems={newsItems} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;