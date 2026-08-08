import { projects } from '../data';
import { ArrowIcon } from './Icons';
import './Projects.css';

export default function Projects() {
  return (
    <section id="work" className="projects">
      <div className="container">
        <p className="eyebrow">Selected work</p>
        <h2 className="projects-title">Things I&apos;ve built</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              className="project-card"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-top">
                <span className="project-id">{project.id}</span>
                <span className="project-category">{project.category}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="project-stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <span className="project-link">
                View project <ArrowIcon />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
