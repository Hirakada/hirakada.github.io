import { React, useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const threshold = window.innerHeight * 0.2;
    const offset = window.scrollY;

    if (offset > threshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isToggleOpen) {
      lastScrollY.current = window.scrollY;
      document.body.style.top = `-${lastScrollY.current}px`;
      document.body.classList.add('menu-open-body');
    } else {
      document.body.classList.remove('menu-open-body');
      document.body.style.top = '';
      window.scrollTo(0, lastScrollY.current);
    }

    return () => {
      document.body.classList.remove('menu-open-body');
      document.body.style.top = '';
      window.scrollTo(0, lastScrollY.current);
    };
  }, [isToggleOpen]);

  function handleToggleOpen() {
    setIsToggleOpen(!isToggleOpen);
  }

  const handleAnchorClick = (e) => {
    if (e.currentTarget.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
        setIsToggleOpen(false);
      }
    } else {
      setIsToggleOpen(false);
    }
  };

  return (
    <header className={`${scrolled ? 'header--scrolled' : ''} ${isToggleOpen ? 'navMenu--open' : ''} ${isHomePage ? 'header--fixed' : ''}`}>
      <div className="header-content">
        <Link to="/">
          <img src="/img/logo-white.svg" alt="Portfolio Logo" />
        </Link>
        <iconify-icon className="menuToggleBtn" icon="material-symbols:menu-rounded" width="24" height="24" onClick={handleToggleOpen}></iconify-icon>
        <nav className={`navMenu ${isToggleOpen ? 'navMenu--open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={handleAnchorClick} className={location.pathname === '/' ? 'active' : ''}>My</Link></li>
            <li><Link to="/project" onClick={handleAnchorClick} className={location.pathname === '/project' ? 'active' : ''}>Projects</Link></li>
            <li><Link to="/doc" onClick={handleAnchorClick} className={location.pathname === '/doc' ? 'active' : ''}>Documentation</Link></li>
            <li><Link to="/contact" onClick={handleAnchorClick} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;