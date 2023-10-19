import React from 'react';
import './styles.css';

function Nav() {
  return (
    <nav className='nav'>
      <ul>
      <img src="my-app/public/littlelemon.jpg" alt="Little Lemon Logo"></img>
        <li><a href="/">HOME</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li><a href="/services">MENU</a></li>
        <li><a href="/contact">RESERVATIONS</a></li>
        <li><a href="/contact">ORDER ONLINE</a></li>
        <li><a href="/contact">LOGIN</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
