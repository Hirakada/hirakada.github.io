import React from 'react';
import './buttons.css';

function SocialButton({ icon, href, id }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="social-button" 
      id={id}
    >
      <iconify-icon icon={icon}></iconify-icon>
    </a>
  );
}

export default SocialButton;
