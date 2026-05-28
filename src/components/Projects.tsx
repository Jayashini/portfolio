import { useNavigate } from 'react-router-dom'
import '../assets/css/Projects.css'
import p1Image from '../assets/img/p1.png'

interface Project {
  id: number
  title: string
  category: string
  description: string
  
  link: string
  image?: string
  status?: 'Completed' | 'In Progress' | 'Planned'
}

function Projects() {
  const navigate = useNavigate()

  const projects: Project[] = [
    {
      id: 1,
      title: "Colombo Sports E-Portal",
      category: "Sports Management System",
      description: "Developed a centralized platform to manage sports operations for the University of Colombo, covering scheduling, team/player management, registrations, and performance tracking. ",
      image: p1Image,
      link: "https://example.com",
      status: "Completed"
    },
    {
      id: 2,
      title: "Portfolio Website",
      category: "Personal Branding",
      description: "A responsive portfolio website built with React and TypeScript, showcasing projects, skills, and professional experience.",
      image: p1Image,
      link: "https://example.com",
      status: "Completed"
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Personal Branding",
      description: "A responsive portfolio website built with React and TypeScript, showcasing projects, skills, and professional experience.",
      image: p1Image,
      link: "https://example.com",
      status: "Completed"
    },

  ]

  const handleViewProject = (projectId: number) => {
    navigate(`/project/${projectId}`)
  }

  return (
    <section id="projects">

      <br/>

      <h2>Projects</h2>
      <p>Check my recent work and projects</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {project.status && (
              <span className={`status-badge status-${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            )}
            <br />
            <br />
            <br />
            <div className="project-header">
              {project.image && (
                <img src={project.image} alt={project.title} className="project-image" />
              )}
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="category">{project.category}</p>
              <p className="description">{project.description}</p>
               <br />

              <button 
                className="view-project"
                onClick={() => handleViewProject(project.id)}
              >
                View Project →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
