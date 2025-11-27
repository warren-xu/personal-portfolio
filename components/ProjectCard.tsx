import type { Project } from "../lib/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="project-card">
      {project.highlight && <span className="project-pill">Featured</span>}

      <header className="project-header">
        <h2 className="project-title">{project.title}</h2>
        {project.subtitle && (
          <p className="project-subtitle">{project.subtitle}</p>
        )}
      </header>

      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.tech.map((item) => (
          <span key={item} className="tech-chip">
            {item}
          </span>
        ))}
      </div>

      {(project.links?.live || project.links?.github) && (
        <div className="project-links">
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="btn btn-solid"
            >
              Live demo
            </a>
          )}
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              View code
            </a>
          )}
        </div>
      )}
    </article>
  );
}
