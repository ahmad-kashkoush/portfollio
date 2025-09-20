/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Filter } from "./Filter";
import { useEffect } from "react";
import { ProjectsGallery } from "./ProjectsGallery";
import { myProjects, myFeaturedProjects } from "./../data/myProjects";
import { useAnimateSides } from "../hooks/useAnimateNav";
/* eslint-disable react/prop-types */

export function FeaturedProjects() {
  const { visible, containerRef, visibleRef } = useAnimateSides();
  
  return (
    <section ref={containerRef} className="featured-projects" id="featured-projects">
      <div className="container">
        <h2
          className={`left-translate ${
            visible || visibleRef.current ? "get-from-side" : ""
          }`}
        >
          Featured projects
        </h2>
        <div className="featured-projects-list">
          {myFeaturedProjects.map((project, index) => (
            <FeaturedProjectItem 
              key={project.id} 
              project={project} 
              isReversed={index % 2 === 1}
              visible={visible}
              visibleRef={visibleRef}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectItem({ project, isReversed, visible, visibleRef }) {
  const { title, summary, highlights, tech, links, img, Video } = project;
  
  return (
    <div className="featured-project-item">
      {/* Project Description Section */}
      <div className="project-description">
        <h3 className="project-title">{title}</h3>
        <p className="project-summary">{summary}</p>
      </div>
      
      {/* Two Column Layout: Achievements + Video */}
      <div className="hero-wrapper">
        <div className={`project-achievements ${isReversed ? 'order-2' : 'order-1'} ${isReversed ? 'right-translate' : 'left-translate'} ${visible || visibleRef.current ? "get-from-side" : ""}`}>
          <div className="project-highlights">
            <h4>Key Achievements:</h4>
            <ul>
              {highlights?.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className={`project-demo ${isReversed ? 'order-1' : 'order-2'} ${isReversed ? 'left-translate' : 'right-translate'} ${visible || visibleRef.current ? "get-from-side" : ""}`}>
          {Video ? (
            <video 
              className="project-video" 
              controls 
              poster={img}
              aria-label={`${title} demo video`}
            >
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="project-demo-placeholder">
              <img src={img} alt={`${title} preview`} className="project-preview-img" />
              <div className="video-placeholder-overlay">
                <div className="play-icon">▶</div>
                <p>Video Demo Coming Soon</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Tech Stack and CTA Buttons - Centered */}
      <div className="project-footer">
        <div className="project-tech">
          <div className="tech-tags">
            {tech?.map((technology, index) => (
              <span key={index} className="tech-tag">{technology}</span>
            ))}
          </div>
        </div>
        
        <div className="project-links">
          {links?.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn project-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function OtherProjects() {
  /* TODO
    - ✅ Create A Heading
    - ✅ Create A filter bar
    - ✅Create A Projects view
    - ✅ create an array of project objects that will be viewed 
    - Style 
    - Add States
    */

  const [selectedTap, setSelectedTap] = useState(null);
  const [projects, setProjects] = useState([]);
  const { visible, containerRef, visibleRef } = useAnimateSides();
  function handleClickSelectedTap(value) {
    setSelectedTap(value);
  }
  useEffect(() => {
    if (selectedTap === null || selectedTap === "all") setProjects(myProjects);
    else
      setProjects(
        myProjects.filter((proj) =>
          proj.filter.includes(selectedTap.toLowerCase())
        )
      );
  }, [selectedTap]);
  return (
    <section ref={containerRef} className="projects " id="projects">
      <div className="container projects-container">
        <h2
          className={`left-translate ${
            visible || visibleRef.current ? "get-from-side" : ""
          }`}
        >
          Other Projects{" "}
        </h2>
        <Filter tab={selectedTap} onClickTab={handleClickSelectedTap} />
        <ProjectsGallery projects={projects} />
      </div>
    </section>
  );
}
