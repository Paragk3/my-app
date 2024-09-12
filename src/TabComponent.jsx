import React, { useState } from 'react';
import './TabComponent.css';

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
        {activeTab === 'about' && (
          <div>
            <h2>Hello! I'm Dave, your sales rep here from Salesforce.</h2>
            <p>I've been working at this awesome company for 3 years now.</p>
            <p>
              I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters – Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM.
            </p>
          </div>
        )}
        {activeTab === 'experiences' && <div>Experiences Content</div>}
        {activeTab === 'recommended' && <div>Recommended Content</div>}
      </div>
    </div>
  );
};

export default TabsComponent;
