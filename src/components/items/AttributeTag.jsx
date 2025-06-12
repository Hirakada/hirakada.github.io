import React from 'react';
import './attribute-tag.css';

function AttributeTag({ iconUrl, name, type }) {
  return (
    <div className='tag-item' data-type={type}>
      {iconUrl && <img src={iconUrl} alt={name} className='tag-icon' />}
      <span className='tag-name'>{name}</span>
    </div>
  );
}

export default AttributeTag;