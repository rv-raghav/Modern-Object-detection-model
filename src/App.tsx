import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { VideoDetection } from './pages/VideoDetection';
import { WebcamDetection } from './pages/WebcamDetection';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<VideoDetection />} />
        <Route path="/webcam" element={<WebcamDetection />} />
      </Routes>
    </Router>
  );
}

export default App;