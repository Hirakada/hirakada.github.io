import React from 'react';
import { Link } from 'react-router-dom';
import { BulletTag } from '../items/AttributeTag.jsx';

import './cards.css';

function ProjectCard({ id, coverImage, title, collaborators, attributes, projectUrl, descriptiveTitleSlug, status }) {
    const projectSlug = descriptiveTitleSlug;

    return (
        <Link to={`/project/${projectSlug}`} className="project-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="project">
                <img src={coverImage} alt={`Cover image for ${title}`} className="cardImage" />
                <BulletTag type={status} content={status}></BulletTag>
                <h5 className="projectName">{title}</h5>

                <div className="cardSection">
                    {attributes && attributes.length > 0 && (
                        <ul className={`attributesList ${attributes.length > 3 ? 'enabled-info' : ''}`}>
                            {attributes.slice(0, 3).map(attribute => (
                                <li key={attribute.id} className="attributeItem">
                                    {attribute.name}
                                </li>
                            ))}

                            {attributes.length > 3 && (
                                <li className="attributeItem more-indicator">
                                    <span className='more-count'>
                                        +{attributes.length - 3}
                                    </span>
                                </li>
                            )}
                        </ul>
                    )}

                    {collaborators && collaborators.length > 0 && (
                        <ul className={`collaboratorsList ${collaborators.length > 3 ? 'enabled-info' : ''}`}>
                            {collaborators.slice(0, 3).map(collaborator => (
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

                            {collaborators.length > 3 && (
                                <li className="collaboratorItem more-indicator">
                                    <span className='more-count'>
                                        +{collaborators.length - 3}
                                    </span>
                                </li>
                            )}
                        </ul>
                    )}
                </div>
            </div>
        </Link>
    );
}

export default ProjectCard;