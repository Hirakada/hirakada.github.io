import React, { useEffect, useState } from 'react';

import ProjectCard from '../components/items/Cards.jsx';
import AttributeTag from '../components/items/AttributeTag.jsx';

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
            <section className='projects-section'>
                <h2>My Projects</h2>
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