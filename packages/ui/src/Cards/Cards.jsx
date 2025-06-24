import React from 'react';
import { Link } from 'react-router-dom';
import { AttributeTag, ContributorTag, BulletTag } from '../AttributeTag/AttributeTag'

import './cards.css';
import '../index.css'

const PORTFOLIO_HOME = "https://portfolio.hirakada.com";

function ProjectCard({ id, coverImage, title, contributors, attributes, projectUrl, descriptiveTitleSlug, status, currentApp }) {
    const projectSlug = descriptiveTitleSlug;

    const targetUrl = currentApp === 'hirakada'
        ? `${PORTFOLIO_HOME}/detail/${projectSlug}`
        : `/detail/${projectSlug}`;

    const CardLinkWrapper = currentApp === 'hirakada' ? 'a' : Link;
    const linkProps = currentApp === 'hirakada'
        ? { href: targetUrl, target: "_self", rel: "noopener noreferrer" }
        : { to: targetUrl };

    return (
        <CardLinkWrapper {...linkProps} className="project-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="project">
                <img loading="lazy" src={coverImage} alt={`Cover image for ${title}`} className="cardImage" />
                <BulletTag type={status} content={status}></BulletTag>
                <h5 className="projectName">{title}</h5>

                <div className="cardSection">
                    {attributes && attributes.length > 0 && (
                        <ul className={`attributesList ${attributes.length > 3 ? 'enabled-info' : ''}`}>
                            {attributes.slice(0, 3).map(attribute => (
                                <li key={attribute.id} className="attributeItem">
                                    <img src={attribute.iconUrl} alt={attribute.name} />
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
        </CardLinkWrapper>
    );
}

export default ProjectCard;