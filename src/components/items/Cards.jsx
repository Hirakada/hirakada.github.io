import React from 'react';
import './cards.css';

function FeaturedProject({ id, coverImage, title, collaborators, attributes, projectUrl }) {
    return (
        <div 
          className="featuredProject" 
          onClick={() => {
            console.log('URL being opened:', projectUrl); // ADD THIS LINE
            window.open(projectUrl, '_blank');
          }}
        >
            <img src={coverImage} alt={`Cover image for ${title}`} className="cardImage" />

            <h5 className="projectName">{title}</h5>

            <div className="cardSection"> 
                {attributes && attributes.length > 0 && (
                    <ul className="attributesList">
                        {attributes.map(attribute => (
                            <li key={attribute} className="attributeItem">
                                {attribute}
                            </li>
                        ))}
                    </ul>
                )}

                {collaborators && collaborators.length > 0 && (
                    <ul className="collaboratorsList">
                        {collaborators.map(collaborator => (
                            <li key={collaborator.id} className="collaboratorItem">
                                {collaborator.profile_image_url && (
                                    <img
                                        src={collaborator.profile_image_url}
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