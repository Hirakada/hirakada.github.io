import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import SocialButtons from '../components/SocialButtons.jsx';
import ProjectCard from '../components/items/Cards.jsx';
import AttributeTag from '../components/items/AttributeTag.jsx';

import '../styles/home.css';

function Home({ projects, attributes, globalLoading }) {
    const roleEl = useRef(null);

    const [featuredProjects, setFeaturedProjects] = useState([]);
    const [homeAttributes, setHomeAttributes] = useState([]);

    useEffect(() => {
        if (!globalLoading && roleEl.current) {
            const autoTyped = new Typed(roleEl.current, {
                strings: ["UI/UX Designer", "Frontend Developer", "Graphic Designer", "Digital Marketer"],
                typeSpeed: 80,
                backSpeed: 50,
                backDelay: 1000,
                loop: true,
                showCursor: false
            });
            return () => {
                autoTyped.destroy();
            };
        }
    }, [globalLoading]);

    useEffect(() => {
        if (!globalLoading) {

            if (projects && projects.length > 0) {
                const filteredFeaturedProjects = projects.filter(p => {
                    return p.isFeatured === true;
                });
                setFeaturedProjects(filteredFeaturedProjects);
                if (filteredFeaturedProjects.length === 0 && projects.length > 0) {
                }
            } else {
                setFeaturedProjects([]);
            }

            if (attributes && attributes.length > 0) {
                const filteredHomeAttributes = attributes.filter(attr => {
                    return attr.type && attr.type !== 'skill';
                });
                setHomeAttributes(filteredHomeAttributes);
                if (filteredHomeAttributes.length === 0 && attributes.length > 0) {
                }
            } else {
                setHomeAttributes([]);
            }
        }
    }, [projects, attributes, globalLoading]);

    return (
        <>
            <section className="hero-section">
                <div className="greeting">
                    <h3>Hi! I am</h3>
                    <h1 className="role">
                        <span className="auto-type" id="role" ref={roleEl}></span>
                    </h1>
                </div>
                <SocialButtons />
            </section>

            <div className="key-skills-section">
                {homeAttributes.length > 0 ? (
                    <div className='skills-grid'>
                        {homeAttributes.map(attribute => (
                            <AttributeTag
                                key={attribute.id}
                                iconUrl={attribute.icon_url}
                                name={attribute.name}
                                type={attribute.type}
                            />
                        ))}
                    </div>
                ) : (
                    null
                )}
            </div>

            <section className='featured-projects-section'>
                <h2>Featured Projects</h2>
                {featuredProjects.length > 0 ? (
                    <div className="normal-grid">
                        {featuredProjects.map(project => (
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                coverImage={project.coverImage}
                                title={project.title}
                                collaborators={project.collaborators}
                                attributes={project.attributes}
                                projectUrl={project.projectUrl}
                                descriptiveTitleSlug={project.descriptiveTitleSlug}
                            />
                        ))}
                    </div>
                ) : (
                    null
                )}
            </section>
        </>
    );
}

export default Home;