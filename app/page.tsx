import { projects } from "../lib/projects";
import ProjectCard from "../components/ProjectCard";

const VIDEO_SRC = ""; 
const VIDEO_POSTER = ""; 

export default function HomePage() {
  return (
    <main className="page">
      <div className="page-bg" />

      <header className="hero">
        <div className="hero-text">
          <p className="hero-tag">Developer · Creator · Team Player</p>
          <h1 className="hero-title" data-glitch="Hey, I'm Warren">Hey, I'm Warren</h1>
          <p className="hero-subtitle">
            I'm a Computer Engineering student at the University of Waterloo
            passionate about building web applications and exploring new
            technologies.
          </p>
        </div>
      </header>

      <section className="projects-section">
        <div className="projects-header">
          <h2 className="section-title">Selected projects</h2>
          <p className="section-subtitle">
            Hand-picked work I'm proud of.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <footer className="page-footer">
        <p>
          Want to collaborate?{" "}
          <a href="https://www.linkedin.com/in/warren-xu/" className="link">
            Let's talk
          </a>
          .
        </p>
      </footer>
    </main>
  );
}
