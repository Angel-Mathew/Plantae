import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer'; // Changed 'Footer' to 'footer'
import Mainpg from './pages/mainpg';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Mainpg />} />
          </Routes>
        </div>
        <Footer /> 
      </div>
    </Router>
  );
}