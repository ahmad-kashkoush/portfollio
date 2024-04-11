export function ProjectsGallery({ projects }) {
  return (
    <div className="projects-gallery">
      {projects.map((proj) => (
        <Project key={proj.id} project={proj} />
      ))}
    </div>
  );
}
function Project({ project: { title, tech, img } }) {
  return (
    <div className="project-card">
      <div className="project-img"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
      </div>
      <h3>{title}</h3>
      <div className="tech">
        {tech.map((i) => (
          <span key={i} className="tech-item">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}
