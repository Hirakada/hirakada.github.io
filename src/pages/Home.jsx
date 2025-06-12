import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import SocialButtons from '../components/SocialButtons.jsx';
import FeaturedProject from '../components/items/Cards.jsx';
import AttributeTag from '../components/items/AttributeTag.jsx';

import '../styles/home.css';

function Home({ supabase, setGlobalLoading, globalLoading }) {
  const roleEl = useRef(null);

  const [projects, setProjects] = useState([]);
  const [attributes, setAttributes] = useState([]);
  const [error, setError] = useState(null);

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
    async function fetchHomeData() {
      setGlobalLoading(true);
      setError(null);

      try {
        const cachedProjects = sessionStorage.getItem('featuredProjectsData');
        const cachedAttributes = sessionStorage.getItem('allAttributesData');

        if (cachedProjects && cachedAttributes) {
          try {
            console.log("Loading data from sessionStorage cache.");
            setProjects(JSON.parse(cachedProjects));
            setAttributes(JSON.parse(cachedAttributes));
            setGlobalLoading(false);
            return;
          } catch (parseError) {
            console.error("Error parsing cached data from sessionStorage:", parseError);
            sessionStorage.removeItem('featuredProjectsData');
            sessionStorage.removeItem('allAttributesData');
          }
        }

        console.log("No valid cache found. Fetching data from Supabase.");

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
          `)
          .eq('is_featured', true);

        if (projectsError) {
          throw new Error(projectsError.message);
        }

        const { data: allAttributesData, error: allAttributesError } = await supabase
          .from("attributes")
          .select("*")
          .neq('type', 'skill');

        if (allAttributesError) {
          throw new Error(allAttributesError.message);
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

          return {
            id: project.id,
            title: project.title,
            description: project.description,
            coverImage: coverImage,
            attributes: projectAttributes,
            collaborators: projectCollaborators,
            projectUrl: project.project_url,
          };
        });

        const transformedAttributes = allAttributesData; 

        setProjects(transformedProjects);
        setAttributes(transformedAttributes);

        sessionStorage.setItem('featuredProjectsData', JSON.stringify(transformedProjects));
        sessionStorage.setItem('allAttributesData', JSON.stringify(transformedAttributes));

      } catch (err) {
        setError(err.message || "Failed to load Home page data.");
        setProjects([]);
        setAttributes([]);
        sessionStorage.removeItem('featuredProjectsData');
        sessionStorage.removeItem('allAttributesData');
      } finally {
        setGlobalLoading(false);
      }
    }

    fetchHomeData();
  }, [supabase, setGlobalLoading]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-red-600 p-4">
        <h2>Error Loading Home Data</h2>
        <p>{error}</p>
        <button
          onClick={() => fetchHomeData()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

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
        {attributes.length > 0 ? (
          <div className='skills-grid'>
            {attributes.map(attribute => (
              <AttributeTag
                key={attribute.id}
                iconUrl={attribute.icon_url}
                name={attribute.name}
                type={attribute.type}
              />
            ))}
          </div>
        ) : (
          process.env.NODE_ENV === 'development' && console.log("No attributes found to display in key types section.")
        )}
      </div>

      <section className='featured-projects-section'>
        <h2>Featured Projects</h2>
        {projects.length > 0 ? (
          <div className="featured-projects-grid">
            {projects.map(project => (
              <FeaturedProject
                key={project.id}
                coverImage={project.coverImage}
                title={project.title}
                collaborators={project.collaborators}
                attributes={project.attributes}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>
        ) : (
          process.env.NODE_ENV === 'development' && console.log("No featured projects available to display.")
        )}
      </section>
    </>
  );
}

export default Home;