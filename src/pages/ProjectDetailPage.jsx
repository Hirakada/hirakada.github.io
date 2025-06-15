import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { AttributeTag, CollaboratorTag } from '../components/items/AttributeTag.jsx';
import { BackButton, OpenButton } from '../components/items/Buttons.jsx'; 
import ProjectCard from '../components/items/Cards.jsx';

import '../styles/projectdetailpage.css';

const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function ProjectDetailPage({ projects, globalLoading }) {
    let { descriptiveTitleSlug } = useParams();
    let [ project, setProject ] = useState(null);
    let [ error, setError ] = useState(null);

    useEffect(() => {
        setError(null);
        setProject(null);

        if (!descriptiveTitleSlug) {
            setError("No project slug found in URL.");
            return;
        }

        if (!globalLoading && projects) {
            if (projects.length > 0) {
                let foundProject = projects.find(p => p.descriptiveTitleSlug === descriptiveTitleSlug);

                if (foundProject) {
                    setProject(foundProject);
                } else {
                    setError("Project not found. It might have been removed or the link is invalid.");
                }
            } else {
                setError("No project data available. Please visit the main projects page first.");
            }
        }
    }, [descriptiveTitleSlug, projects, globalLoading]);

    if (globalLoading) {
        return null;
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-red-600 p-4">
                <h2>Error Loading Project Details</h2>
                <p>{error}</p>
                <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Go back to Projects
                </Link>
            </div>
        );
    }

    if (!project) {
        return null;
    }

    let otherProjects = projects.filter(p => p.id !== project.id);

    let shuffledOtherProjects = shuffleArray([...otherProjects]);

    const numberOfRandomProjects = 3;
    let projectsToDisplay = shuffledOtherProjects.slice(0, numberOfRandomProjects);

    return (
        <> 
            <span className='back'><BackButton to="/project" label="Back to Projects"></BackButton></span>
            <section className="project-detail-section">

                {project.coverImage && (
                    <img src={project.coverImage} alt={project.title} className="project-cover-image" />
                )}
                
                <div className="project-detail-content">
                    <h1 className="project-title">{project.title}</h1>
                    <p className="project-description">{project.description}</p>

                    {project.attributes && project.attributes.length > 0 && (
                        <div className="project-attributes">
                            <h3>Tools:</h3>
                            <div className="attributes-grid">
                                {project.attributes.map(attr => (
                                    <AttributeTag key={attr.id} name={attr.name} iconUrl={attr.iconUrl} />
                                ))}
                            </div>
                        </div>
                    )}

                    {project.collaborators && project.collaborators.length > 0 && (
                        <div className="project-collaborators">
                            <h3>Collaborators:</h3>
                            <div className="collaborators-list">
                                {project.collaborators.map(collaborator => (
                                    <CollaboratorTag
                                        key={collaborator.id}
                                        name={collaborator.name}
                                        imageUrl={collaborator.profileImage}
                                        websiteUrl={collaborator.websiteUrl}
                                        linkedinUrl={collaborator.linkedinUrl}
                                        roleOnProject={collaborator.roleOnProject}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {project.projectImages && project.projectImages.length > 1 && (
                        <div className="project-gallery">
                            <h3>More Images:</h3>
                            <div className="image-grid">
                                {project.projectImages
                                    .filter(image => image.image_url !== project.coverImage)
                                    .sort((a, b) => a.order - b.order)
                                    .map(image => (
                                        <img key={image.id} src={image.image_url} alt={`Project image ${image.id}`} className="project-gallery-image" />
                                    ))}
                            </div>
                        </div>
                    )}

                    {project.projectUrl && (
                        <OpenButton
                            icon="mdi:open-in-new"
                            label="Open Project"
                            action={() => window.open(project.projectUrl, '_blank', 'noopener noreferrer')}
                        />
                    )}
                </div>
            </section>
            <section className='other-projects-section'>
                <h2>Other Projects</h2>
                {projectsToDisplay.length > 0 ? (
                <div className="normal-grid">
                    {projectsToDisplay.map(otherProject => (
                    <ProjectCard
                        key={otherProject.id}
                        id={otherProject.id}
                        coverImage={otherProject.coverImage}
                        title={otherProject.title}
                        collaborators={otherProject.collaborators}
                        attributes={otherProject.attributes}
                        projectUrl={otherProject.projectUrl}
                        descriptiveTitleSlug={otherProject.descriptiveTitleSlug}
                    />
                    ))}
                </div>
                ) : (
                <p>No other projects available.</p>
                )}
            </section>
        </>
    );
}

export default ProjectDetailPage;