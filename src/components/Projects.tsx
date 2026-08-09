import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/css/Projects.css'
import colomboLogo from '../assets/img/project/colombo logo.png'
import firemexImage from '../assets/img/project/firemex.png'
import pubsubImage from '../assets/img/project/pubsub.jpg'
import magnateImage from '../assets/img/project/magnate.jpg'

interface Project {
  id: number
  title: string
  category: string
  filterTag: string
  description: string
  link: string
  image?: string
  status?: 'Completed' | 'In Progress' | 'Planned'
}

function Projects() {
  const navigate = useNavigate()
  const [activeFilter, setActiveFilter] = useState<string>('All')

  const filterCategories = ['All', 'Management Systems', 'AI & Security', 'Architecture', 'Data Governance']

  const projects: Project[] = [
    {
      id: 1,
      title: "Colombo Sports E-Portal",
      category: "Sports Management System",
      filterTag: "Management Systems",
      description: "Developed a centralized platform to manage sports operations for the University of Colombo, covering scheduling, team/player management, and performance tracking.",
      image: colomboLogo,
      link: "https://example.com",
      status: "Completed"
    },
    {
      id: 2,
      title: "FiremeX",
      category: "Fire detection system",
      filterTag: "AI & Security",
      description: "An AI powered software-based fire detection system for CCTV platforms, utilizing advanced computer vision models to identify thermal anomalies in real-time.",
      image: firemexImage,
      link: "https://example.com",
      status: "In Progress"
    },
    {
      id: 3,
      title: "PubSub",
      category: "Publish/ Subscribe Middleware Architecture",
      filterTag: "Architecture",
      description: "Pub/Sub architecture, there are message Publishers and Subscribers. A special type of middleware amalgamates the Publishers and Subscribers in an Asynchronous mode of communication.",
      image: pubsubImage,
      link: "https://github.com/Jayashini/Middleware-PubSub/blob/main/README.md",
      status: "Completed"
    },
    {
      id: 4,
      title: "Data Governance Framework Design",
      category: "Magnate Shipping Agency",
      filterTag: "Data Governance",
      description: "The core proposal, which incorporates DAMA-DMBOK standards and ISO 27001 principles. It details the governance structure and technical execution strategies.",
      image: magnateImage,
      link: "https://docs.google.com/document/d/1ZENfxmjbQT_b_QHiImME9uHSZ8EfmakptzacMP0OwXM/edit?tab=t.0",
      status: "Completed"
    }
  ]

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.filterTag === activeFilter)

  const handleViewProject = (project: Project) => {
    if (project.id === 1 || project.id === 2) {
      navigate(`/project/${project.id}`)
    } else {
      window.open(project.link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="projects">
      <h2 className="section-header-title">PROJECTS</h2>
      <p className="section-header-subtitle">Check my recent work and projects</p>
      
      {/* Category Filter Pills */}
      <div className="project-filter-pills">
        {filterCategories.map((cat, idx) => (
          <button
            key={idx}
            className={`filter-pill ${activeFilter === cat ? 'active-filter' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            {project.status && (
              <span className={`status-badge status-${project.status.toLowerCase().replace(' ', '-')}`}>
                {project.status}
              </span>
            )}
            <div className="project-header">
              {project.image && (
                <img src={project.image} alt={project.title} className="project-image" />
              )}
            </div>

            <div className="project-content">
              <p className="category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="description">{project.description}</p>
              
              <div className="project-card-actions">
                <button
                  className="view-project-link"
                  onClick={() => handleViewProject(project)}
                >
                  {project.id <= 2 ? 'View Details' : 'View Docs / Code'}
                </button>
                {project.link.includes('github') && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-ext-link" title="Open GitHub Repository">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

