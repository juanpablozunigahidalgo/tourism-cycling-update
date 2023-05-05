import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Routecost from './pages/routecalculator';
import Equipment from './pages/equipment';

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
      </Routes>
    </Router>
  );
}

export default App;