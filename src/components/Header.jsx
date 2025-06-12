import { React, useState, useEffect } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css'; 

function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
    }
  };

  return (
    <header className={scrolled ? 'header--scrolled' : ''}>
      <div className="header-content">
        <Link to="/">
          <img src="/img/logo-white.svg" alt="Portfolio Logo" />
        </Link>
        <iconify-icon className="menuToggleBtn" icon="material-symbols:menu-rounded" width="24" height="24" onClick={handleToggleOpen}></iconify-icon>
        <nav className={`navMenu ${isToggleOpen ? 'navMenu--open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={handleAnchorClick} className={location.hash === '#my' ? 'active' : ''}>My</Link></li>
            <li><Link to="/project" onClick={handleAnchorClick} className={location.hash === '#projects' ? 'active' : ''}>Projects</Link></li>
            <li><Link to="/documentation" onClick={handleAnchorClick} className={location.hash === '#documentation' ? 'active' : ''}>Documentation</Link></li>
            <li><Link to="/contact" onClick={handleAnchorClick} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;