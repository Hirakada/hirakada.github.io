import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

import { SocialButton, ProjectCard, AttributeTag } from "@hirakada/ui";

import '../styles/home.css';

function Home({ projects, attributes, globalLoading }) {
    const roleEl = useRef(null);

    let [featuredProjects, setFeaturedProjects] = useState([]);
    let [homeAttributes, setHomeAttributes] = useState([]);

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
                let filteredFeaturedProjects = projects.filter(p => {
                    return p.isFeatured === true;
                });
                setFeaturedProjects(filteredFeaturedProjects);
            } else {
                setFeaturedProjects([]);
            }

            if (attributes && attributes.length > 0) {
                const typeOrder = [
                    'language',
                    'framework',
                    'tool',
                ];

                const sortedAttributes = [...attributes]
                    .sort((a, b) => {
                        const indexA = typeOrder.indexOf(a.type);
                        const indexB = typeOrder.indexOf(b.type);

                        if (indexA === -1 && indexB === -1) {
                            return a.name.localeCompare(b.name);
                        }
                        if (indexA === -1) return 1;
                        if (indexB === -1) return -1;

                        if (indexA < indexB) return -1;
                        if (indexA > indexB) return 1;

                        return a.name.localeCompare(b.name);
                    });

                setHomeAttributes(sortedAttributes);
            } else {
                setHomeAttributes([]);
            }
        }
    }, [projects, attributes, globalLoading]);

    return (
        <>
            <section className="hero-section first-section">
                <div className="greeting">
                    <h2>Hi! I am</h2>
                    <h1 className="role">
                        <span className="auto-type" id="role" ref={roleEl}></span>
                    </h1>
                </div>
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
                <p className="section-description text-description">Here's a curated selection of my most impactful and innovative projects, highlighting key skills and creative solutions.</p>
                {featuredProjects.length > 0 ? (
                    <div className="normal-grid">
                        {featuredProjects.map(project => (
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                coverImage={project.coverImage}
                                title={project.title}
                                contributors={project.contributors}
                                attributes={project.attributes}
                                projectUrl={project.projectUrl}
                                status={project.projectStatus}
                                descriptiveTitleSlug={project.descriptiveTitleSlug}
                                currentApp="hirakada"
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