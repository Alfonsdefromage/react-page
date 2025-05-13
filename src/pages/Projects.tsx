import Carousel from "react-multi-carousel";
import { projects } from "../data/projectData";
import "./Projects.css";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <p>
        Here are some of the projects I have worked on. I am constantly learning
        and improving my skills, so stay tuned for more updates!
      </p>
      <Carousel responsive={responsive} containerClass="carousel-container">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <h2>{project.name}</h2>
            <h3>Role: {project.role}</h3>
            <img src={project.image} alt={project.name} />
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
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
