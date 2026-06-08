import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import mainpg from './pages/mainpg';
import './App.css';




export default function App()
{  return (
    <Router>
     <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<mainpg />} />
      </Routes>
      <Footer />
     </div>

    </Router>
  );
}