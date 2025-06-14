import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { createClient } from "@supabase/supabase-js";
import { OrbitProgress } from 'react-loading-indicators';

import Header from './components/header.jsx';
import Home from './pages/Home.jsx';
import ProjectPage from './pages/ProjectsPage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';

import ScrollToTop from './components/Scroll.jsx';

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
        async function fetchAllData() {
            setGlobalLoading(true);
            setAppError(null);

            try {
                const cachedProjects = sessionStorage.getItem('allProjectsData');
                const cachedAttributes = sessionStorage.getItem('allAttributesData');

                if (cachedProjects && cachedAttributes) {
                    try {
                        console.log("App.jsx: Loading all data from sessionStorage cache.");
                        setAllProjects(JSON.parse(cachedProjects));
                        setAllAttributes(JSON.parse(cachedAttributes));
                        setGlobalLoading(false);
                        return;
                    } catch (parseError) {
                        console.error("App.jsx: Error parsing cached data:", parseError);
                        sessionStorage.removeItem('allProjectsData');
                        sessionStorage.removeItem('allAttributesData');
                    }
                }

                console.log("App.jsx: No valid cache found. Fetching all data from Supabase.");

                const { data: projectsData, error: projectsError } = await supabase
                    .from("projects")
                    .select(`
                        *,
                        project_attributes (
                            attributes (
                                id, name, type, icon_url
                            )
                        ),
                        project_collaborators (
                            collaborators (
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

                const { data: attributesData, error: attributesError } = await supabase
                    .from("attributes")
                    .select("*");

                if (attributesError) {
                    throw new Error(attributesData.message);
                }

                const transformedProjects = projectsData.map(project => {
                    const projectAttributes = project.project_attributes.map(pa => ({
                        id: pa.attributes.id,
                        name: pa.attributes.name,
                        type: pa.attributes.type,
                        iconUrl: pa.attributes.icon_url,
                    }));
                    const projectCollaborators = project.project_collaborators.map(pc => ({
                        id: pc.collaborators.id,
                        name: pc.collaborators.name,
                        profileImage: pc.collaborators.profile_image_url,
                        websiteUrl: pc.collaborators.website_url,
                        linkedinUrl: pc.collaborators.linkedin_url,
                    }));
                    let coverImage = null;
                    if (project.project_images && project.project_images.length > 0) {
                        const sortedImages = [...project.project_images].sort((a, b) => a.order - b.order);
                        coverImage = sortedImages[0].image_url;
                    }

                    const descriptiveTitleSlug = createSlug(project.title);

                    return {
                        id: project.id,
                        title: project.title,
                        description: project.long_description,
                        coverImage: coverImage,
                        attributes: projectAttributes,
                        collaborators: projectCollaborators,
                        projectImages: project.project_images,
                        projectUrl: project.project_url,
                        isFeatured: project.is_featured,
                        descriptiveTitleSlug: descriptiveTitleSlug,
                    };
                });

                setAllProjects(transformedProjects);
                setAllAttributes(attributesData);

                sessionStorage.setItem('allProjectsData', JSON.stringify(transformedProjects));
                sessionStorage.setItem('allAttributesData', JSON.stringify(attributesData));

            } catch (err) {
                setAppError(err.message || "Failed to load application data.");
                setAllProjects([]);
                setAllAttributes([]);
                sessionStorage.removeItem('allProjectsData');
                sessionStorage.removeItem('allAttributesData');
            } finally {
                setGlobalLoading(false);
            }
        }

        fetchAllData();
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
        <Router basename="/">
            <ScrollToTop /> 

            {globalLoading && (
                <div className="flex items-center justify-center w-screen h-screen fixed top-0 left-0 bg-black z-50 pointer-events-none">
                    <OrbitProgress color="#E0E0E0" size="medium" text="" textColor="" />
                </div>
            )}

            <Header />
            <main>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                projects={allProjects}
                                attributes={allAttributes}
                                globalLoading={globalLoading}
                            />
                        }
                    />

                    <Route
                        path="/project"
                        element={
                            <ProjectPage
                                projects={allProjects}
                                attributes={allAttributes}
                                globalLoading={globalLoading}
                            />
                        }
                    />

                    <Route
                        path="/project/:descriptiveTitleSlug"
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
                                    Go to Home
                                </Link>
                            </div>
                        }
                    />
                </Routes>
            </main>
        </Router>
    );
}

export default App;