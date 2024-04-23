// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Current from './pages/current'; // Correct import
import Experiment from './pages/experiment'; // Correct import

function App() {
  return (
    <Router>
      <Routes> {/* Wrap Routes around Route components */}
        <Route path="/" element={<Current />} /> {/* Use element prop instead of component */}
        <Route path="/exp" element={<Experiment />} /> {/* Use element prop instead of component */}
      </Routes>
    </Router>
  );
}

export default App;
