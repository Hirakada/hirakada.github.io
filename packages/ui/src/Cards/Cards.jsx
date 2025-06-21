import React from 'react';
import { Link } from 'react-router-dom';
import { AttributeTag, ContributorTag, BulletTag } from '../AttributeTag/AttributeTag'

import './cards.css';

function ProjectCard({ id, coverImage, title, contributors, attributes, projectUrl, descriptiveTitleSlug, status }) {
    const projectSlug = descriptiveTitleSlug;

    return (
        <Link to={`/project/${projectSlug}`} className="project-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="project">
                <img loading="lazy" src={coverImage} alt={`Cover image for ${title}`} className="cardImage" />
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
                                <li className="more-indicator">
                                    <span className='more-count'>
                                        +{attributes.length - 3}
                                    </span>
                                </li>
                            )}
                        </ul>
                    )}

                    {contributors && contributors.length > 0 && (
                        <ul className={`contributorsList ${contributors.length > 3 ? 'enabled-info' : ''}`}>
                            {contributors.slice(0, 3).map(contributor => (
                                <li key={contributor.id} className="contributorItem">
                                    {contributor.profileImage && (
                                        <img
                                            src={contributor.profileImage}
                                            alt={`Profile of ${contributor.name}`}
                                            className="contributor-profile-pic"
                                        />
                                    )}
                                </li>
                            ))}

                            {contributors.length > 3 && (
                                <li className="contributorItem more-indicator">
                                    <span className='more-count'>
                                        +{contributors.length - 3}
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