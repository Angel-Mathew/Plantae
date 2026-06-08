import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';
import Onepg from './pages/Onepg';



export default function App()
{  return (
    <Router>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<mainpg />} />
        </Routes>
       <Footer />
      </div>

    </Router>
  );
}