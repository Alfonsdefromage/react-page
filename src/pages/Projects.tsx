import { projects } from "../data/projectData";
import "./Projects.css";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <p>
        Here are some of the projects I have worked on. I am constantly learning
        and improving my skills, so stay tuned for more updates!
      </p>
      {projects.map((project, i) => (
        <div key={i} className="projects-card">
          <img src={project.image} alt={project.name} />
          <div className="desc">
            <div className="a73d">
              <h2>{project.name}</h2>
              <h3>Role: {project.role}</h3>
            </div>
            <p>{project.description}</p>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-button"
                >
                  GitHub
                </a>
              )}
              {project.website && (
                <a
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-button"
                >
                  Website
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
