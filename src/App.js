import React from 'react';
import './App.css';
import TabComponent from './TabComponent';
import GalleryComponent from './GalleryComponent';

function App() {
  return (
    <div className="app-container">
      {/* Left side will remain empty */}
      <div className="left-side"></div>

      {/* Right side will contain the tabs and gallery */}
      <div className="right-side">
        <TabComponent />
        <GalleryComponent />
      </div>
    </div>
  );
}

export default App;
