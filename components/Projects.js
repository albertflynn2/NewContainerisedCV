import React from 'react';
import { 
  projectsStyle, 
  projectsTitleStyle, 
  projectItemStyle, 
  projectTitleStyle, 
  projectDescriptionStyle, 
  projectLinkStyle, 
  projectImageStyle 
} from './ProjectsStyles';

function Projects() {
  const projects = [
    {
      title: 'Project A',
      description: 'Description of Project A.',
      link: 'www.example.com/project-a',
      image: 'path-to-project-a-image'
    },
    {
      title: 'Project B',
      description: 'Description of Project B.',
      link: 'www.example.com/project-b',
      image: 'path-to-project-b-image'
    }
    // Add more projects as needed
  ];

  return (
    <section style={projectsStyle}>
      <h2 style={projectsTitleStyle}>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} style={projectItemStyle}>
          <img src={project.image} alt={project.title} style={projectImageStyle} />
          <h3 style={projectTitleStyle}>{project.title}</h3>
          <p style={projectDescriptionStyle}>{project.description}</p>
          <a href={project.link} style={projectLinkStyle}>View Project</a>
        </div>
      ))}
    </section>
  );
}

export default Projects;
