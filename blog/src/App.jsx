// App.js

import React from "react";
import "./App.css";

import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DrawingsGallery from './components/drawings/DrawingGallery'; 
import Play from './components/Play'
const App = () => {
    return (     
      
      <Router>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drawings" element={<DrawingsGallery />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
    );
};

export default App;
