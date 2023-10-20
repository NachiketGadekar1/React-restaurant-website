import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <img src="/littlelemon.jpg" alt="Little Lemon Logo"  height={50}/>
        <li><Link to="/More Components/Home">HOME</Link></li>
        <li><Link to="/More Components/About">ABOUT</Link></li>
        <li><Link to="/More Components/Menu">MENU</Link></li>
        <li><Link to="/More Components/Reservations">RESERVATIONS</Link></li>
        <li><Link to="/More Components/Order">ORDER ONLINE</Link></li>
        <li><Link to="/More Components/Login">LOGIN</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
