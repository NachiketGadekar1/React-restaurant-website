import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './More Components/Home';
import About from './More Components/About.js'; 
import Order from './More Components/Order'; 
import Login from './More Components/Login'; 
import Reservations from './More Components/Reservations'
import Menu from './More Components/Menu'
import './styles.css';

function Main() {
  return (
    <main className='main'>
      <Routes>
        <Route path="/More Components/Home" element={<Home />} />
        <Route path="/More Components/About" element={<About />} />
        <Route path="/More Components/Login" element={<Login />} />
        <Route path="/More Components/Menu" element={<Menu />} />
        <Route path="/More Components/Order" element={<Order />} />
        <Route path="/More Components/Reservations" element={<Reservations />} />
      </Routes>
      
    </main>
  );
}

export default Main;
