import React from 'react';
import { SocialButton } from '../Buttons/Buttons'; 
import './home.css';
import '../index.css'

function SocialButtons() {
  return (
    <div className="social-list">
      <SocialButton 
        href="https://linkedin.com/in/hirakada/" 
        icon="mdi:linkedin" 
        id="linkedin" 
      />
      <SocialButton 
        href="https://instagram.com/hirakada/" 
        icon="mdi:instagram" 
        id="instagram" 
      />
      <SocialButton 
        href="https://github.com/Hirakada" 
        icon="mdi:github" 
        id="github" 
      />
    </div>
  );
}

export default SocialButtons;
