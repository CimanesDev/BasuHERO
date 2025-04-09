// components/Onboarding.js
import React, { useState } from 'react';
import './Onboarding.css';

import avatar1 from './../assets/avatars/2x2.jpg';

const avatarOptions = [
  { id: 1, src: avatar1 },
  { id: 2, src: avatar1 },
  { id: 3, src: avatar1 },
  { id: 4, src: avatar1 },
];

const Onboarding = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: '',
    avatar: 1,
  });

  const handleNameChange = (e) => {
    setUserData({ ...userData, name: e.target.value });
  };

  const handleAvatarSelect = (avatarId) => {
    setUserData({ ...userData, avatar: avatarId });
  };

  const handleNext = () => {
    if (step === 1 && userData.name.trim() === '') {
      alert('Please enter your name');
      return;
    }
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete(userData);
    }
  };

  return (
    <div className="onboarding">
      <div className="onboarding-container">
        <div className="onboarding-header">
          <h1>Welcome to BasuHERO</h1>
          <p>Join the movement to clean up our planet while having fun!</p>
        </div>

        <div className="onboarding-content">
          {step === 1 && (
            <div className="onboarding-step">
              <h2>What's your name?</h2>
              <input
                type="text"
                placeholder="Enter your name"
                value={userData.name}
                onChange={handleNameChange}
                className="onboarding-input"
              />
            </div>
          )}

          {step === 2 && (
            <div className="onboarding-step">
              <h2>Choose your hero avatar</h2>
              <div className="avatar-options">
                {avatarOptions.map((avatar) => (
                  <div
                    key={avatar.id}
                    className={`avatar-option ${userData.avatar === avatar.id ? 'selected' : ''}`}
                    onClick={() => handleAvatarSelect(avatar.id)}
                  >
                    <img src={avatar.src} alt={`Avatar ${avatar.id}`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="onboarding-step">
              <h2>Ready to become a BasuHero?</h2>
              <div className="avatar-preview">
                <img 
                  src={avatarOptions.find(a => a.id === userData.avatar).src} 
                  alt="Selected Avatar" 
                />
                <h3>{userData.name}</h3>
              </div>
              <p>
                Get ready to embark on an eco-friendly adventure! Collect trash, 
                earn points, compete with friends, and help save the planet.
              </p>
            </div>
          )}
        </div>

        <div className="onboarding-footer">
          <div className="progress-dots">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`progress-dot ${step === i ? 'active' : ''}`}
              ></div>
            ))}
          </div>
          <button className="button button-large" onClick={handleNext}>
            {step === 3 ? "Let's Go!" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;