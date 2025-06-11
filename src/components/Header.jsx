import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css'; 

function Header() {
  const location = useLocation();

  const handleAnchorClick = (e) => {
    if (e.currentTarget.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header>
      <div className="header-content">
        <Link to="/">
          <img src="/img/logo-white.svg" alt="Portfolio Logo" />
        </Link>
        <nav>
          <ul>
            <li><Link to="/" onClick={handleAnchorClick} className={location.pathname === '/' ? 'active' : ''}>My</Link></li>
            <li><Link to="/" onClick={handleAnchorClick} className={location.pathname === '/' ? 'active' : ''}>Projects</Link></li>
            <li><Link to="/" onClick={handleAnchorClick} className={location.pathname === '/' ? 'active' : ''}>Documentation</Link></li>
          </ul>
        </nav>
        <Link to="/" onClick={handleAnchorClick} className={`contact ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
      </div>
    </header>
  );
}

export default Header;