import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

function Header() {
    const [isToggleOpen, setIsToggleOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (isToggleOpen) {
            document.documentElement.classList.add('no-scroll');
            document.body.classList.add('menu-open-body');
        } else {
            document.documentElement.classList.remove('no-scroll');
            document.body.classList.remove('menu-open-body');
        }

        return () => {
            document.documentElement.classList.remove('no-scroll');
            document.body.classList.remove('menu-open-body');
        };
    }, [isToggleOpen]);

    function handleToggleOpen() {
        setIsToggleOpen(!isToggleOpen);
    }

    const handleNavLinkClick = () => {
        setIsToggleOpen(false);
    };

    return (
        <header className={`${isToggleOpen ? 'navMenu--open' : ''}`}>
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
                                to="/journey"
                                onClick={handleNavLinkClick}
                                className={location.pathname === '/journey' ? 'active' : ''}
                            >
                                Journey
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;