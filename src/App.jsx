import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { createClient } from "@supabase/supabase-js";

import Header from './components/header.jsx';
import Home from './pages/Home.jsx';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjectsWithDetails();
  }, []);

  async function getProjectsWithDetails() {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from("projects")
        .select(`
          *,
          project_attributes (
            attributes (
              *
            )
          ),
          project_collaborators (
            collaborators (
              *
            )
          ),
          project_images (
            *
          )
        `);

      if (error) {
        console.error("Error fetching projects with details:", error);
        setError(error.message);
        setProjects([]);
      } else {
        console.log("Raw data fetched from Supabase (all columns, nested):", data);

        const transformedProjects = data.map(project => {
          const attributes = project.project_attributes.map(pa => pa.attributes.name);

          const collaborators = project.project_collaborators.map(pc => ({
            id: pc.collaborators.id,
            name: pc.collaborators.name,
            profile_image_url: pc.collaborators.profile_image_url,
            website_url: pc.collaborators.website_url,
            linkedin_url: pc.collaborators.linkedin_url,
          }));

          let coverImage = null;
          if (project.project_images && project.project_images.length > 0) {
            const sortedImages = [...project.project_images].sort((a, b) => a.order - b.order);
            coverImage = sortedImages[0].image_url;
          }

          return {
            id: project.id,
            title: project.title,
            description: project.description,
            coverImage: coverImage,
            attributes: attributes,
            collaborators: collaborators,
            projectUrl: project.project_url,
          };
        });

        console.log("Transformed data for components:", transformedProjects);

        setProjects(transformedProjects);
      }
    } catch (err) {
      console.error("An unexpected error occurred:", err);
      setError("An unexpected error occurred while fetching project data.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-700">
        Loading project data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-600 p-4">
        <h2>Error Loading Data</h2>
        <p>{error}</p>
        <button
          onClick={getProjectsWithDetails}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <Router basename="/">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home projects={projects} />} />

          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center min-h-screen text-gray-700 bg-gray-50 p-4">
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