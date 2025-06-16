import React, { useEffect, useState } from 'react';

import ProjectCard from '../components/items/Cards.jsx';

import '../styles/projectpage.css';

function ProjectPage({ projects, attributes, globalLoading }) {
    let [allProjectsDisplay, setAllProjectsDisplay] = useState([]);
    let [allAttributesDisplay, setAllAttributesDisplay] = useState([]);

    useEffect(() => {
        if (!globalLoading) {
            if (projects) {
                setAllProjectsDisplay(projects);
            } else {
                setAllProjectsDisplay([]);
            }

            if (attributes) {
                setAllAttributesDisplay(attributes);
            } else {
                setAllAttributesDisplay([]);
            }
        } else {
            setAllProjectsDisplay([]);
            setAllAttributesDisplay([]);
        }
    }, [projects, attributes, globalLoading]);

    if (globalLoading) {
        return null;
    }

    return (
        <>
            <section className='projects-section first-section'>
                <h2>My Projects</h2>
                <p className="section-description text-description">Explore a diverse portfolio of my work, ranging from web development to graphic design, showcasing a blend of creativity and technical skill.</p>

                {allProjectsDisplay.length > 0 ? (
                    <div className="normal-grid">
                        {allProjectsDisplay.map(project => (
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                coverImage={project.coverImage}
                                title={project.title}
                                collaborators={project.collaborators}
                                attributes={project.attributes}
                                projectUrl={project.projectUrl}
                                status={project.projectStatus}
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

export default ProjectPage;