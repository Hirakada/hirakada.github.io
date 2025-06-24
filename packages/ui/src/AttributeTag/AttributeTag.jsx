import React, { useState, useEffect, useRef } from 'react';
import './attribute-tag.css';
import '../index.css'

function AttributeTag({ iconUrl, name, type }) {
  return (
    <div className='tag-item' data-type={type}>
      {iconUrl && <img src={iconUrl} alt={name} className='tag-icon' />}
      <span className='tag-name'>{name}</span>
    </div>
  );
}

function ContributorTag({ imageUrl, name, websiteUrl, linkedinUrl, roleOnProject }) {
    const tagRef = useRef(null);

    const hasMultipleLinks = websiteUrl && linkedinUrl;
    const hasOneLink = (websiteUrl && !linkedinUrl) || (!websiteUrl && linkedinUrl);
    const onlyWebsite = websiteUrl && !linkedinUrl;
    const onlyLinkedIn = linkedinUrl && !websiteUrl;

    const handleMainTagClick = () => {
        if (onlyWebsite) {
            window.open(websiteUrl, '_blank', 'noopener noreferrer');
        } else if (onlyLinkedIn) {
            window.open(linkedinUrl, '_blank', 'noopener noreferrer');
        }
    };

    const handleWebsiteIconClick = (e) => {
        e.stopPropagation();
        if (websiteUrl) {
            window.open(websiteUrl, '_blank', 'noopener noreferrer');
        }
    };

    const handleLinkedInIconClick = (e) => {
        e.stopPropagation();
        if (linkedinUrl) {
            window.open(linkedinUrl, '_blank', 'noopener noreferrer');
        }
    };

    return (
        <div
            className={`contributor-tag ${hasOneLink ? 'clickable-tag' : ''}`}
            ref={tagRef}
            onClick={hasOneLink ? handleMainTagClick : undefined}
        >
            <div className='contributor-tag-info'>
              {imageUrl && <img src={imageUrl} alt={name} className='contributor-avatar' />}
              <p className='contributor-name'>{name}</p>
            </div>
            <div className='icon-list'>
                {websiteUrl && (
                    <iconify-icon
                        icon="mdi:web"
                        className="link-icon website-icon"
                        onClick={handleWebsiteIconClick}
                        title="Visit Website"
                    ></iconify-icon>
                )}
                {linkedinUrl && (
                    <iconify-icon
                        icon="mdi:linkedin"
                        className="link-icon linkedin-icon"
                        onClick={handleLinkedInIconClick}
                        title="Visit LinkedIn Profile"
                    ></iconify-icon>
                )}
            </div>

        </div>
    );
}

function BulletTag({type, content}) {
  return (
    <p className="bulletTag" data-type={type}><span></span>{content}</p>
  );
}

export { AttributeTag, ContributorTag, BulletTag };