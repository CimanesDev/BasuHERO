// components/NewsSection.js
import React from 'react';
import './NewsSection.css';

const NewsSection = ({ newsItems }) => {
  return (
    <div className="news-section">
      <div className="section-title">
        <h2>News & Articles</h2>
        <a href="#" className="show-more-link">Show More &gt;</a>
      </div>
      <div className="news-list">
        {newsItems.length > 0 ? (
          newsItems.map((item) => (
            <div className={`news-item ${item.read ? 'read' : ''}`} key={item.id}>
              <div className="news-content">
                <h3>{item.title}</h3>
                <p className="news-date">{item.date}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-news">No news at the moment. Start questing to see updates!</p>
        )}
      </div>
    </div>
  );
};

export default NewsSection;