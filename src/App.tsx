import React, { useEffect } from 'react';
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
import Injuries from './pages/knowledge/injuries';
import Bikemechanics from './pages/knowledge/bikemechanics';
import Biomechanics from './pages/knowledge/biomechanics';
import Accidentsandprevention from './pages/knowledge/accidentsandprevention';
import Nutrition from './pages/knowledge/nutrition';
import Training from './pages/knowledge/training';
import Profilepage from './pages/Profilepage';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import { Auth0Provider } from '@auth0/auth0-react';


const TRACKING_ID="G-Z4K92B80V1";
ReactGA.initialize(TRACKING_ID);

function App() {
  ReactGA.pageview(window.location.pathname);
  return (
    <Auth0Provider
        domain='dev-gpo5cpbi6qdl5wsj.us.auth0.com'
        clientId='GQPX7QNdmzUXXu9umA78OepNI5yykjcw'
        authorizationParams={{
          redirect_uri: 'https://tourismcycling.com/home/login'
        }}
      >
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
        <Route path="/knowledge/injuries" element={<Injuries />} />
        <Route path="/knowledge/bikemechanics" element={<Bikemechanics />} />
        <Route path="/knowledge/biomechanics" element={<Biomechanics />} />
        <Route path="/knowledge/accidentsandprevention" element={<Accidentsandprevention />} />
        <Route path="/knowledge/nutrition" element={<Nutrition />} />
        <Route path="/knowledge/training" element={<Training />} />
        <Route path="/profile" element={<Profilepage />} />
      </Routes>
    </Router>
    </Auth0Provider>
  );
}

export default App;