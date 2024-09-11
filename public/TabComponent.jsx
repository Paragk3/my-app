import React, { useState } from 'react';
import './TabComponent.css';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tab-container">
      <div className="tab-nav">
        <button
          className={activeTab === 'about' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => handleTabClick('about')}
        >
          About Me
        </button>
        <button
          className={activeTab === 'experiences' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => handleTabClick('experiences')}
        >
          Experiences
        </button>
        <button
          className={activeTab === 'recommended' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => handleTabClick('recommended')}
        >
          Recommended
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'about' && (
          <div className="tab-pane">
            <p>Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now...</p>
          </div>
        )}
        {activeTab === 'experiences' && (
          <div className="tab-pane">
            <p>Experience content goes here...</p>
          </div>
        )}
        {activeTab === 'recommended' && (
          <div className="tab-pane">
            <p>Recommended content goes here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
