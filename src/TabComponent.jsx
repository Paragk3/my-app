import React, { useState } from 'react';
import './TabComponent.css'; // Assuming your CSS is in this file

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="container">
      {/* Tabs Section */}
      <div className="tabs-container">
        <div className="tabs">
          <div
            className={`tab ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
          >
            About Me
          </div>
          <div
            className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experiences
          </div>
          <div
            className={`tab ${activeTab === 'recommended' ? 'active' : ''}`}
            onClick={() => setActiveTab('recommended')}
          >
            Recommended
          </div>
        </div>

        <div className="tab-content">
          {activeTab === 'about' && (
            <p>
              Hello! I'm Dave, your sales rep here from Salesforce. I've been
              working at this awesome company for 3 years now...
            </p>
          )}
          {activeTab === 'experience' && <p>Experience content goes here...</p>}
          {activeTab === 'recommended' && <p>Recommended content goes here...</p>}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-container">
        <div className="gallery-header">
          <div className="gallery-tab">Gallery</div>
          <button className="add-image-btn">+ Add Image</button>
        </div>

        <div className="gallery">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </div>
      </div>
    </div>
  );
};

export default TabComponent;
