import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav'>
      <ul>
      <img src="/littlelemon.jpg" alt="Little Lemon Logo"  width={200}/>
        <li><Link to="/More Components/Home">HOME</Link></li>
        <li><Link to="/More Components/About">ABOUT</Link></li>
        <li><Link to="/More Components/Menu">MENU</Link></li>
        <li><Link to="/More Components/BookingPage">RESERVATIONS</Link></li>
        <li><Link to="/More Components/Order">ORDER</Link></li>
        <li><Link to="/More Components/Login">LOGIN</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
