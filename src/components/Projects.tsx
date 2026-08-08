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
      description: "Developed a centralized platform to manage sports operations for the University of Colombo, covering scheduling, team/player management, and performance tracking.",
      image: colomboLogo,
      link: "https://example.com",
      status: "Completed"
    },
    {
      id: 2,
      title: "FiremeX",
      category: "Fire detection system",
      description: "An AI powered software-based fire detection system for CCTV platforms, utilizing advanced computer vision models to identify thermal anomalies in real-time.",
      image: firemexImage,
      link: "https://example.com",
      status: "In Progress"
    },
    {
      id: 3,
      title: "PubSub",
      category: "Publish/ Subscribe Middleware Architecture ",
      description: "Pub/Sub architecture, there are message Publishers and Subscribers.A special type of middleware amalgamates the Publishers and Subscribers in an Asynchronous mode of communication.The messages among the participants could be grouped based on unique topics, where a publisher may publish on one or many topics, and a subscriber may also listen to one or many topics.",
      image: pubsubImage,
      link: "https://github.com/Jayashini/Middleware-PubSub/blob/main/README.md",
      status: "Completed"
    },
    {
      id: 4,
      title: "Data Governance Framework Design",
      category: "Magnate Shipping Agency ",
      description: "The core proposal, which incorporates DAMA-DMBOK standards and ISO 27001 principles. It details the governance structure (Data Council, Owners, Stewards) and technical execution strategies (cloud-based centralized storage, RBAC, encryption, and automated data validation).",
      image: magnateImage,
      link: "https://docs.google.com/document/d/1ZENfxmjbQT_b_QHiImME9uHSZ8EfmakptzacMP0OwXM/edit?tab=t.0",
      status: "Completed"
    }
  ]

  const handleViewProject = (project: Project) => {
    if (project.id === 1 || project.id === 2) {
      navigate(`/project/${project.id}`)
    } else {
      window.open(project.link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      <p>Check my recent work and projects</p>
      <div className="projects-grid">
        {projects.map((project) => (
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
              <br />
              <button
                className="view-project-link"
                onClick={() => handleViewProject(project)}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
