
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Error404 from './pages/Error404';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import './App.css'

export default function App() {
  return (
    <Router> {/* Wrap the entire component with BrowserRouter */}
      <div>
        <Navbar /> {/* Render the Navbar component */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

