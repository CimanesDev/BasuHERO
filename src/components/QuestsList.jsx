// components/QuestsList.js
import React from 'react';
import './QuestsList.css';

const QuestsList = ({ quests }) => {
  return (
    <div className="quests-list">
      <div className="section-title">
        <h2>Monthly Quests</h2>
        <a href="#" className="show-more-link">Show More &gt;</a>
      </div>
      <div className="quests-grid">
        {quests.map((quest) => (
          <div className="quest-item" key={quest.id}>
            <div className="quest-icon">
              {quest.type === 'Plastics' && '🍶'}
              {quest.type === 'Biodegradable' && '♻️'}
            </div>
            <div className="quest-info">
              <h3>{quest.type}</h3>
              <div className="quest-progress">
                <div 
                  className="progress-bar" 
                  style={{ width: `${(quest.completed / quest.total) * 100}%` }}
                ></div>
              </div>
              <p className="quest-count">{quest.completed}/{quest.total}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestsList;