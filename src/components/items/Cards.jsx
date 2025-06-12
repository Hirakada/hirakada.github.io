import React from 'react';
import './cards.css';

function FeaturedProject({ id, coverImage, title, collaborators, attributes, projectUrl }) {
    return (
        <div 
          className="featuredProject" 
          onClick={() => {
            console.log('URL being opened:', projectUrl);
            window.open(projectUrl, '_blank');
          }}
        >
            <img src={coverImage} alt={`Cover image for ${title}`} className="cardImage" />

            <h5 className="projectName">{title}</h5>

            <div className="cardSection"> 
                {attributes && attributes.length > 0 && (
                <ul className="attributesList">
                    {attributes.map(attribute => (
                    <li key={attribute.id} className="attributeItem">
                        {attribute.name}
                    </li>
                    ))}
                </ul>
                )}

                {collaborators && collaborators.length > 0 && (
                    <ul className="collaboratorsList">
                        {collaborators.map(collaborator => (
                            <li key={collaborator.id} className="collaboratorItem">
                                {collaborator.profileImage && (
                                    <img
                                        src={collaborator.profileImage}
                                        alt={`Profile of ${collaborator.name}`}
                                        className="collaborator-profile-pic"
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                )}        
            </div>
        </div>
    );
}

export default FeaturedProject;