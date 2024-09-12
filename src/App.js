import React from 'react';
import './App.css';
import TabComponent from './TabComponent';
import GalleryComponent from './GalleryComponent';

function App() {
  return (
    <div className="app-container">
      <div className="left-side"></div>
      <div className="right-side">
        <TabComponent />
        <GalleryComponent />
      </div>
    </div>
  );
}

export default App;
