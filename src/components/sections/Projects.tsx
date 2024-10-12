import projects from "@/data/projects";
import React from "react";
import ProjectCard from "../smallComp/ProjectCard";
import "@/styles/projectSection.css"

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h2 className="projects-title">
        Highlights from Our Latest{" "}
        <span className="projects-title-highlight">Projects</span>
      </h2>
      <div className="projects-grid">
        {projects.map((project) => {
          return (
            <div key={project.name} className="project-card-wrapper">
              <ProjectCard
                data={project}
                className="project-card-hover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
