import React, { useState, useEffect, useRef } from 'react';
import './attribute-tag.css';

function AttributeTag({ iconUrl, name, type }) {
  return (
    <div className='tag-item' data-type={type}>
      {iconUrl && <img src={iconUrl} alt={name} className='tag-icon' />}
      <span className='tag-name'>{name}</span>
    </div>
  );
}

function CollaboratorTag({ imageUrl, name, websiteUrl, linkedinUrl, roleOnProject }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const tagRef = useRef(null);

  const hasMultipleLinks = websiteUrl && linkedinUrl;
  const hasOneLink = (websiteUrl && !linkedinUrl) || (!websiteUrl && linkedinUrl);
  const onlyWebsite = websiteUrl && !linkedinUrl;
  const onlyLinkedIn = linkedinUrl && !websiteUrl;

  useEffect(() => {
    function handleClickOutside(event) {
      if (tagRef.current && !tagRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [tagRef]);

  const handleTagClick = () => {
    if (hasMultipleLinks) {
      setIsDropdownOpen(prev => !prev);
    } else if (onlyWebsite) {
      window.open(websiteUrl, '_blank', 'noopener noreferrer');
    } else if (onlyLinkedIn) {
      window.open(linkedinUrl, '_blank', 'noopener noreferrer');
    }
  };

  return (
    <div
      className={`collaborator-tag ${hasMultipleLinks || hasOneLink ? 'clickable' : ''}`}
      onClick={handleTagClick}
      ref={tagRef}
    >
      {imageUrl && <img src={imageUrl} alt={name} className='collaborator-avatar' />}
      <span className='collaborator-name'>{name}</span>

      <p className='project-role'>{roleOnProject}</p>

      {hasMultipleLinks && (
        <div className="dropdown-indicator">▼</div>
      )}

      {hasMultipleLinks && isDropdownOpen && (
        <div className="collaborator-dropdown">
          <a href={websiteUrl} target='_blank' rel='noopener noreferrer' className='dropdown-link' onClick={() => setIsDropdownOpen(false)}>
            Website
          </a>
          <a href={linkedinUrl} target='_blank' rel='noopener noreferrer' className='dropdown-link' onClick={() => setIsDropdownOpen(false)}>
            LinkedIn
          </a>
        </div>
      )}
    </div>
  );
}

function BulletTag({type, content}) {
  return (
      console.log(type, content),
      <p className="bulletTag" data-type={type}><span></span>{content}</p>
  );
}

export { AttributeTag, CollaboratorTag, BulletTag };