import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import './App.css';
import './components/Radio';
import Home from './components/pages/Home';
import Graph from './components/Graph';





function App() {
  return (
  <div>
    <Router>
      <Home/>
    </Router>
  </div>
  );
}

export default App;
