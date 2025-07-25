import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Landing.css';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-root">
      <div className="landing-card minimal">
        <h1 className="landing-title">Welcome to ChatApp</h1>
        <p className="landing-subtitle">Fast. Secure. Modern chat for everyone.</p>
        <div className="landing-btns side-by-side">
          <button className="landing-btn" onClick={() => navigate('/login')}>Log In</button>
          <button className="landing-btn secondary" onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Landing; 