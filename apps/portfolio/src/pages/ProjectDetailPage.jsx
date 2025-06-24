import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import ColorThief from 'colorthief';

import { AttributeTag, ContributorTag, BulletTag, BackButton, OpenButton, ProjectCard } from '@hirakada/ui';

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

function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    let max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }

    return [h * 360, s * 100, l * 100];
}

function hslToRgb(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;

    let r, g, b;

    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p, q, t) => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;

        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function ProjectDetailPage({ projects, globalLoading }) {
    let { descriptiveTitleSlug } = useParams();
    let [project, setProject] = useState(null);
    let [error, setError] = useState(null);
    let [dominantColor, setDominantColor] = useState(null);
    const spotlightRef = useRef(null); 
    const [spotlightShouldBeVisible, setSpotlightShouldBeVisible] = useState(false);

    useEffect(() => {
        setError(null);
        setProject(null); 
        setDominantColor(null);
        setSpotlightShouldBeVisible(false);

        if (!descriptiveTitleSlug) {
            setError("No project slug found in URL.");
            return;
        }

        if (!globalLoading && projects) {
            if (projects.length > 0) {
                let foundProject = projects.find(p => p.descriptiveTitleSlug === descriptiveTitleSlug);

                if (foundProject) {
                    setProject(foundProject);
                    if (foundProject.coverImage) {
                        const colorThief = new ColorThief();
                        const img = new Image();

                        img.addEventListener('load', function() {
                            const dominantColorRGB = colorThief.getColor(img); 

                            let [h, s, l] = rgbToHsl(dominantColorRGB[0], dominantColorRGB[1], dominantColorRGB[2]);
                            const lightnessIncrease = 15; 
                            l = Math.min(100, l + lightnessIncrease);

                            const boostedColorRGB = hslToRgb(h, s, l);

                            setDominantColor(`rgb(${boostedColorRGB[0]}, ${boostedColorRGB[1]}, ${boostedColorRGB[2]})`);
                            
                            setSpotlightShouldBeVisible(true); 
                        });

                        img.crossOrigin = 'Anonymous';
                        img.src = foundProject.coverImage;
                    } else {
                        setSpotlightShouldBeVisible(false);
                    }
                } else {
                    setError("Project not found. It might have been removed or the link is invalid.");
                    setSpotlightShouldBeVisible(false);
                }
            } else {
                setError("No project data available. Please visit the main projects page first.");
                setSpotlightShouldBeVisible(false);
            }
        }
    }, [descriptiveTitleSlug, projects, globalLoading]);

    useEffect(() => {
        if (spotlightRef.current) {
            if (spotlightShouldBeVisible) {
                spotlightRef.current.classList.remove('fade-in-animation');
                void spotlightRef.current.offsetWidth; 
                spotlightRef.current.classList.add('fade-in-animation');
            } else {
                spotlightRef.current.classList.remove('fade-in-animation');
            }
        }
    }, [spotlightShouldBeVisible]);


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

    const spotlightStyle = dominantColor ? {
        backgroundImage: `linear-gradient(
            ${dominantColor} 0%,
            rgba(${parseInt(dominantColor.slice(4, -1).split(',')[0])}, ${parseInt(dominantColor.slice(4, -1).split(',')[1])}, ${parseInt(dominantColor.slice(4, -1).split(',')[2])}, 0.5) 20%,
            rgba(${parseInt(dominantColor.slice(4, -1).split(',')[0])}, ${parseInt(dominantColor.slice(4, -1).split(',')[1])}, ${parseInt(dominantColor.slice(4, -1).split(',')[2])}, 0.2) 40%, 
            transparent 100%
        )`
    } : {};
    
    return (
        <>    
            <section 
                ref={spotlightRef} 
                className="global-spotlight-background" 
                style={spotlightStyle}
            ></section>
            {/* Updated BackButton 'to' prop to '/' */}
            <span className='back'><BackButton to="/" label="Back to Projects"></BackButton></span>

            <section className="project-detail-section">
                {project.coverImage && (
                    <img src={project.coverImage} alt={project.title} className="project-cover-image" />
                )}

                <div className="project-detail-content">
                    <BulletTag type={[project.projectStatus]} content={[project.projectStatus]}/>
                    <h1 className="project-title">{project.title}</h1>
                    <div className="project-description text-description">
                        <ReactMarkdown>{project.description}</ReactMarkdown>
                    </div>
                    {project.attributes && project.attributes.length > 0 && (
                        <div className="project-attributes">
                            <h3>Tools:</h3>
                            <div className="attributes-grid">
                                {project.attributes.map(attr => (
                                    <AttributeTag
                                        key={attr.id}
                                        iconUrl={attr.iconUrl}
                                        name={attr.name}
                                        type={attr.type}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {project.contributors && project.contributors.length > 0 && (
                        <div className="project-contributors">
                            <h3>Contributors:</h3>
                            <div className="contributors-list">
                                {project.contributors.map(contributor => (
                                    <ContributorTag
                                        key={contributor.id}
                                        name={contributor.name}
                                        imageUrl={contributor.profileImage}
                                        websiteUrl={contributor.websiteUrl}
                                        linkedinUrl={contributor.linkedinUrl}
                                        roleOnProject={contributor.roleOnProject}
                                    />
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
                <p className='section-description text-description'>Curious about our diverse capabilities? Take a look at these other projects to see the range of solutions and creativity we bring to the table.</p>
                {projectsToDisplay.length > 0 ? (
                    <div className="normal-grid">
                        {projectsToDisplay.map(otherProject => (
                            <ProjectCard
                                key={otherProject.id}
                                id={otherProject.id}
                                coverImage={otherProject.coverImage}
                                title={otherProject.title}
                                contributors={otherProject.contributors}
                                attributes={otherProject.attributes}
                                projectUrl={otherProject.projectUrl}
                                status={otherProject.projectStatus}
                                descriptiveTitleSlug={otherProject.descriptiveTitleSlug}
                                currentApp="portfolio"
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