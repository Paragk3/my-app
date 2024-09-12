import React, { useState } from 'react';
import './TabsComponent.css';

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState('about');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-header">
        <button
          className={`tab-button ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => handleTabClick('about')}
        >
          About Me
        </button>
        <button
          className={`tab-button ${activeTab === 'experiences' ? 'active' : ''}`}
          onClick={() => handleTabClick('experiences')}
        >
          Experiences
        </button>
        <button
          className={`tab-button ${activeTab === 'recommended' ? 'active' : ''}`}
          onClick={() => handleTabClick('recommended')}
        >
          Recommended
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'about' && <div>About Me Content</div>}
        {activeTab === 'experiences' && <div>Experiences Content</div>}
        {activeTab === 'recommended' && <div>Recommended Content</div>}
      </div>
    </div>
  );
};

export default TabsComponent;
