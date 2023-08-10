import React, { useState } from 'react';
import './Navbar.css'; // Import your custom CSS file
import { Link } from 'react-router-dom'; // Imported Link to use Switch in main app
function Navbar() {

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white py-4 px-6">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">

          {/* Slide-in Mobile Menu */}
          
          <a href='/'><img src="./logo192.png" className="header-logo block"></img></a>
          <ul className="nav-links flex space-x-4 ml-auto">
            
            <li><Link to="/" className="nav-link block">Home
            </Link></li>
            <li><Link to="/About" className="nav-link block">About
            </Link></li>
            <li><Link to="/Skills" className="nav-link block">Skills
            </Link></li>
            <li><Link to="/Projects" className="nav-link block">Projects
            </Link></li>
            <li><Link to="/Contact" className="nav-link block">Contact
            </Link></li>
          </ul>
          
          
        </nav>
      </div>
    </header>

  );
}

export default Navbar