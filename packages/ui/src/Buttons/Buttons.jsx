import React from 'react';
import { Link } from 'react-router-dom';
import './buttons.css';
import '../index.css'

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

function BackButton({ to, label }) {
  return (
    <Link to={to} className="back-button">
      <iconify-icon icon="ic:baseline-keyboard-backspace" width="24" height="24"></iconify-icon>
      {label}
    </Link>
  );
}

function OpenButton({icon, label, action}) {
  return (
    <button className="open-button" onClick={action}>
      <iconify-icon icon={icon} width="24" height="24"></iconify-icon>
      {label}
    </button>
  )
}

export { SocialButton, BackButton, OpenButton };