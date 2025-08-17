// App.js

import React from "react";
import "./App.css";

import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DrawingGallery from './components/drawings/DrawingGallery'; 
import BookGallery from './components/books/BookGallery'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import ChessGame from "./components/ChessGame";
const App = () => {
    return (     
      
      <Router>      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drawings" element={<DrawingGallery />} />
        <Route path="/books" element={<BookGallery />} />
        <Route path="/chess" element={<ChessGame />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
    );
};

export default App;
