import React, { useState, useEffect, useRef } from 'react';
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
    };
  }, [isToggleOpen]);

  function handleToggleOpen() {
    setIsToggleOpen(!isToggleOpen);
  }

  const handleNavLinkClick = () => {
    setIsToggleOpen(false);
  };

  const handleInternalAnchorScroll = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href.startsWith('#') && href.length > 1 && location.pathname === '/') {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
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
        <Link to="/" onClick={handleNavLinkClick}>
          <img src="/img/logo-white.svg" alt="Portfolio Logo" />
        </Link>
        <iconify-icon className="menuToggleBtn" icon="material-symbols:menu-rounded" width="24" height="24" onClick={handleToggleOpen}></iconify-icon>
        <nav className={`navMenu ${isToggleOpen ? 'navMenu--open' : ''}`}>
          <ul>
            <li>
              <Link
                to="/"
                onClick={handleNavLinkClick}
                className={location.pathname === '/' ? 'active' : ''}
              >
                My
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                onClick={handleNavLinkClick}
                className={location.pathname === '/project' ? 'active' : ''}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/doc"
                onClick={handleNavLinkClick}
                className={location.pathname === '/doc' ? 'active' : ''}
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleNavLinkClick}
                className={location.pathname === '/contact' ? 'active' : ''}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;