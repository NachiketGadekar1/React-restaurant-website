import React from 'react';
import './styles.css';

function Footer() {
  return (
    <footer className='footer'  style={{ fontWeight:"bold" }}> 
      <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      
    </footer>
  );
}

export default Footer;
