import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createClient } from "@supabase/supabase-js";
import { OrbitProgress } from 'react-loading-indicators';
import { Header, ScrollToTop, Footer } from '@hirakada/ui';
import ProjectPage from './src/pages/ProjectsPage.jsx';
import ProjectDetailPage from './src/pages/ProjectDetailPage.jsx';
import './src/index.css';
import '@hirakada/ui/ui.css';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

const createSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
};

function App() {
    const [globalLoading, setGlobalLoading] = useState(true);
    const [allProjects, setAllProjects] = useState([]);
    const [allAttributes, setAllAttributes] = useState([]);
    const [appError, setAppError] = useState(null);

    useEffect(() => {
        if (!globalLoading) {
            document.body.classList.add('allow-scroll');
        } else {
            document.body.classList.remove('allow-scroll');
        }
    }, [globalLoading]);

    useEffect(() => {
        const loadData = async () => {
            setGlobalLoading(true);
            setAppError(null);

            let dataLoadedSuccessfully = false;

            try {
                let cachedProjects = sessionStorage.getItem('allProjectsData');
                let cachedAttributes = sessionStorage.getItem('allAttributesData');

                if (cachedProjects && cachedAttributes) {
                    try {
                        setAllProjects(JSON.parse(cachedProjects));
                        setAllAttributes(JSON.parse(cachedAttributes));
                        dataLoadedSuccessfully = true;
                    } catch (parseError) {
                        sessionStorage.removeItem('allProjectsData');
                        sessionStorage.removeItem('allAttributesData');
                    }
                }

                if (!dataLoadedSuccessfully) {
                    let { data: projectsData, error: projectsError } = await supabase
                        .from("projects")
                        .select(`
                            *,
                            project_attributes (
                                attributes (
                                    id, name, type, icon_url
                                )
                            ),
                            project_contributors (
                                contributors (
                                    id, name, profile_image_url, website_url, linkedin_url
                                )
                            ),
                            project_images (
                                *
                            )
                        `); 
                        
                    if (projectsError) {
                        throw new Error(projectsError.message);
                    }

                    let { data: attributesData, error: attributesError } = await supabase
                        .from("attributes")
                        .select("*");

                    if (attributesError) {
                        throw new Error(attributesData.message);
                    }

                    let transformedProjects = projectsData.map(project => {
                        let projectAttributes = project.project_attributes.map(pa => ({
                            id: pa.attributes.id,
                            name: pa.attributes.name,
                            type: pa.attributes.type,
                            iconUrl: pa.attributes.icon_url,
                        }));
                        let projectContributors = project.project_contributors.map(pc => ({
                            id: pc.contributors.id,
                            name: pc.contributors.name,
                            profileImage: pc.contributors.profile_image_url,
                            websiteUrl: pc.contributors.website_url,
                            linkedinUrl: pc.contributors.linkedin_url,
                        }));
                        let coverImage = null;
                        if (project.project_images && project.project_images.length > 0) {
                            const sortedImages = [...project.project_images].sort((a, b) => a.order - b.order);
                            coverImage = sortedImages[0].image_url;
                        }

                        let descriptiveTitleSlug = createSlug(project.title);

                        return {
                            id: project.id,
                            title: project.title,
                            description: project.long_description,
                            coverImage: coverImage,
                            attributes: projectAttributes,
                            contributors: projectContributors,
                            projectImages: project.project_images,
                            projectUrl: project.project_url,
                            projectStatus: project.status,
                            isFeatured: project.is_featured,
                            descriptiveTitleSlug: descriptiveTitleSlug,
                        };
                    });

                    setAllProjects(transformedProjects);
                    setAllAttributes(attributesData);

                    sessionStorage.setItem('allProjectsData', JSON.stringify(transformedProjects));
                    sessionStorage.setItem('allAttributesData', JSON.stringify(attributesData));
                    dataLoadedSuccessfully = true;
                }

            } catch (err) {
                setAppError(err.message || "Failed to load application data.");
                setAllProjects([]);
                setAllAttributes([]);
                sessionStorage.removeItem('allProjectsData');
                sessionStorage.removeItem('allAttributesData');
            } finally {
                setTimeout(() => {
                    setGlobalLoading(false);
                }, 500);
            }
        };

        loadData();
    }, []);

    if (appError) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-red-600 p-4">
                <h1>Application Error</h1>
                <p>{appError}</p>
                <p>Please refresh the page or try again later.</p>
            </div>
        );
    }

    return (
        <>
            <Router basename="/">
                <ScrollToTop /> 

                {globalLoading && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50 pointer-events-none">
                        <OrbitProgress color="#E0E0E0" size="medium" text="" textColor="" />
                    </div>
                )}

                <Header currentApp="portfolio" /> 
                <main>
                    <Routes>
                        <Route 
                            path="/" 
                            element={
                                <ProjectPage
                                    projects={allProjects}
                                    attributes={allAttributes}
                                    globalLoading={globalLoading}
                                />
                            } 
                        />

                        <Route 
                            path="/detail/:descriptiveTitleSlug" 
                            element={
                                <ProjectDetailPage
                                    projects={allProjects}
                                    globalLoading={globalLoading}
                                />
                            } 
                        />

                        <Route 
                            path="*" 
                            element={
                                <div
                                    className="
                                        flex flex-col items-center justify-center
                                        text-gray-700 bg-gray-50 p-4
                                    "
                                    style={{ minHeight: 'calc(100vh - 64px)' }}
                                >
                                    <h1 className="text-6xl font-extrabold text-red-600">404</h1>
                                    <p className="text-2xl mt-4">Page Not Found</p>
                                    <p className="mt-2 text-lg">The page you are looking for does not exist.</p>
                                    <Link to="/" className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                                        Go to Projects Home
                                    </Link>
                                </div>
                            } 
                        />
                    </Routes>
                </main>
                <Footer /> 
            </Router>
            <SpeedInsights/>
        </>
    );
}

export default App;