// App.jsx
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Onboarding from './components/Onboarding';

function App() {
  const [isOnboarding, setIsOnboarding] = useState(true);
  const [user, setUser] = useState(null);

  const handleOnboardingComplete = (userData) => {
    setUser(userData);
    setIsOnboarding(false);
  };

  return (
    <div className="app">
      {isOnboarding ? (
        <Onboarding onComplete={handleOnboardingComplete} />
      ) : (
        <>
          <Navbar />
          <Dashboard user={user} />
        </>
      )}
    </div>
  );
}

export default App;