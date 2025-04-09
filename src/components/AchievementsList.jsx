// components/AchievementsList.js
import React from 'react';
import './AchievementsList.css';

const AchievementsList = ({ achievements }) => {
  return (
    <div className="achievements-list">
      <div className="section-title">
        <h2>Achievements</h2>
        <a href="#" className="show-more-link">Show More &gt;</a>
      </div>
      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <div 
            className={`achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}`} 
            key={achievement.id}
          >
            <div className="achievement-icon">
              <span>{achievement.icon}</span>
              {!achievement.unlocked && <div className="achievement-lock">🔒</div>}
            </div>
            <p>{achievement.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsList;