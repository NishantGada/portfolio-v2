import React from 'react';
import './Projects.css';
import { projects } from '../../utils/data/projects';

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 id="section-header">Projects</h2>
      <div className="grid-container">
        {projects.map((project, index) => (
          project.show ? <div className="project" key={index}>
            <h2>
              {project.name} {project.emoji && <span>{project.emoji}</span>}
            </h2>
            <p><i>Tech Stack: {project.techStack}</i></p>
            <p>{project.description}</p>
            <a
              className="github-links"
              href={project.githubLink}
              target="_blank"
              // rel="noopener noreferrer"
            >
              View on Github
            </a>
          </div> : <></>
        ))}
      </div>
    </section>
  );
}
