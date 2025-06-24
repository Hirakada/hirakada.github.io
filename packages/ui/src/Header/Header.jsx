import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import '../index.css'

const HIRAKADA_HOME = "https://hirakada.com";
const PORTFOLIO_HOME = "https://portfolio.hirakada.com";

function Header({ currentApp }) {
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

    const renderNavLink = (to, text, appSpecificPath, targetDomain) => {
        const isCurrentActive = location.pathname === appSpecificPath;

        if (currentApp === targetDomain) {
            return (
                <Link
                    to={to}
                    onClick={handleNavLinkClick}
                    className={isCurrentActive ? 'active' : ''}
                >
                    {text}
                </Link>
            );
        } else {
            const fullUrl = `${targetDomain === 'hirakada' ? HIRAKADA_HOME : PORTFOLIO_HOME}${to}`;
            return (
                <a
                    href={fullUrl}
                    onClick={handleNavLinkClick}
                    target="_self"
                    rel="noopener noreferrer"
                >
                    {text}
                </a>
            );
        }
    };

    return (
        <header className={`${isToggleOpen ? 'navMenu--open' : ''}`}>
            <div className="header-content">
                {currentApp === 'hirakada' ? (
                    <Link to="/" onClick={handleNavLinkClick}>
                        <img src="/img/logo-white.svg" alt="Portfolio Logo" />
                    </Link>
                ) : (
                    <a href={HIRAKADA_HOME} onClick={handleNavLinkClick}>
                        <img src="/img/logo-white.svg" alt="Portfolio Logo" />
                    </a>
                )}
                
                <iconify-icon className="menuToggleBtn" icon="material-symbols:menu-rounded" width="24" height="24" onClick={handleToggleOpen}></iconify-icon>
                
                <nav className={`navMenu ${isToggleOpen ? 'navMenu--open' : ''}`}>
                    <ul>
                        <li>
                            {renderNavLink("/", "My", "/", 'hirakada')}
                        </li>
                        <li>
                            {renderNavLink("/", "Projects", "/", 'portfolio')}
                        </li>
                        <li>
                            {renderNavLink("/doc", "Documentation", "/doc", 'hirakada')}
                        </li>
                        <li>
                            {renderNavLink("/journey", "Journey", "/journey", 'hirakada')}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;