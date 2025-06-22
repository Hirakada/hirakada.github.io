import React from 'react';
import './footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    const startYear = 2025;

    const yearDisplay = startYear === currentYear ? currentYear : `${startYear}-${currentYear}`;

    return (
        <footer className="main-footer">
            <div className="footer-content">
                <p className="copyright-notice">
                    &copy; {yearDisplay} <a href="https://hirakada.com" target="_blank" rel="noopener noreferrer">Hirakada</a>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;