import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Routecost from './pages/routecalculator';
import Equipment from './pages/equipment';
import Recomended from './pages/recomended';
import Preparation from './pages/preparation';
import Bikecheck from './pages/bikecheck';
import Knowledge from './pages/knowledge';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/route" element={<Routecost />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/recomended" element={<Recomended />} />
        <Route path="/preparation" element={<Preparation />} />
        <Route path="/bikecheck" element={<Bikecheck />} />
        <Route path="/knowledge" element={<Knowledge />} />
      </Routes>
    </Router>
  );
}

export default App;