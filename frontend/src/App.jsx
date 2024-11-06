import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Auth from './pages/Auth';
import ContactPage from './pages/Contact';
import Display from './pages/Display';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/display" element={<Display />} />
        <Route path="/About" elemnt={<About />} />
      </Routes>
    </Router>
  );
};

export default App