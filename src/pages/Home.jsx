import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import SocialButtons from '../components/SocialButtons.jsx';
import FeaturedProject from '../components/items/Cards.jsx';

import '../styles/home.css';

function Home({ projects }) {
  const roleEl = useRef(null);

  useEffect(() => {
    if (roleEl.current) {
      const typed = new Typed(roleEl.current, {
        strings: ["UI/UX Designer", "Frontend Developer", "Digital Marketer"],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1000,
        loop: true,
        showCursor: false
      });
      return () => {
        typed.destroy();
      };
    }
  }, []);

  const featuredProjects = projects || [];

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

      <section className='featured-projects-section'>
        <h2>Featured Projects</h2>
        {featuredProjects.length > 0 ? (
          <div className="featured-projects-grid">
            {featuredProjects.map(project => (
              <FeaturedProject
                key={project.id}
                id={project.id}
                coverImage={project.coverImage}
                title={project.title}
                collaborators={project.collaborators}
                attributes={project.attributes}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>
        ) : (
          <p>No featured projects available.</p>
        )}
      </section>
    </>
  );
}

export default Home;