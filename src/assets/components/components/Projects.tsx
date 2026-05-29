import React from 'react';
import './Projects.css';

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const Projects: React.FC = () => {
  const projectData: ProjectItem[] = [
    {
      title: "Donor-uz",
      description: "Donor-uz is a comprehensive blood donation platform that connects donors with recipients in need. The platform allows users to register as donors, search for available blood types, and schedule donations.",
      tags: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "edu-test-platformasi",
      description: "edu-test-platformasi is an online testing platform for educational institutions. It allows teachers to create and manage tests, and students to take tests and view their results.",
      tags: ["React", "Node.js", "TypeScript", "MongoDB"],
      link: "#"
    },
    {
      title: "ValyutaCourse",
      description: "ValyutaCourse is a currency exchange rate application that provides users with up-to-date information on currency exchange rates. The app allows users to view current exchange rates for various currencies.",
      tags: ["React", "Node.js", "TypeScript", "API"],
      link: "#"
    },
    {
      title: "Fresha1r App",
      description: "fresha1r is a simple weather application that provides users with real-time weather information for their location. It features a clean and intuitive interface, allowing users to easily access forecasts.",
      tags: ["React", "TypeScript", "Framer Motion"],
      link: "#"
    }
  ];

  return (
    <div className="projects-section fade-in-up">
      <div className="projects-container">
        
        <div className="projects-header">
          <span className="badge">MY WORKS</span>
          <h2>My Projects</h2>
          <div className="title-line"></div>
        </div>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span className="tag-item" key={tIndex}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-footer">
                <a href={project.link} className="btn-project-view">
                  View Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;