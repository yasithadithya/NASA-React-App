import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/Index';
import Pic from './components/Pic';
import Mars from './components/Mars';
import Login from './components/Login'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/Home" element={<Index />} />
        <Route path="/" element={<Login />} />
        <Route path="/pic" element={<Pic />} />
        <Route path="/mars" element={<Mars />} />
      </Routes>
    </Router>
  );
}

export default App;
