import { useNavigate } from 'react-router-dom'
import p1Image from '../assets/img/p1.1.png'
import '../assets/css/project.css'

function Project2() {
  const navigate = useNavigate()

  const handleBackToProjects = () => {
    navigate('/')
    setTimeout(() => {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <section id="project1-detail">
      <button className="back-button" onClick={handleBackToProjects}>
        ← Back to Projects
      </button>

      <div className="project-detail-container">
        <div className="project-detail-header">
          <h2>Colombo Sports E-Portal</h2>
    
        </div>

        <div className="project-detail-content">
          <div className="detail-section">
            <h2>Project Overview</h2>
            <p>
              Developed a centralized platform to manage sports operations for the University of Colombo, 
              covering scheduling, team/player management, registrations, and performance tracking.
            </p>
          </div>

          <div className="project-layout">
            {/* Left side - Gallery */}
            <div className="gallery-section">
              <div className="detail-section">
                <h2>Project Gallery</h2>
                <div className="image-gallery">
                  <div className="gallery-item">
                    <img src={p1Image} alt="Dashboard View" />
                  </div>
                  <div className="gallery-item">
                    <img src="https://via.placeholder.com/300x200?text=Team+Management" alt="Team Management" />
                  </div>
                  <div className="gallery-item">
                    <img src="https://via.placeholder.com/300x200?text=Scheduling" alt="Scheduling System" />
                  </div>
                  <div className="gallery-item">
                    <img src="https://via.placeholder.com/300x200?text=Registration" alt="Registration Form" />
                  </div>
                  <div className="gallery-item">
                    <img src="https://via.placeholder.com/300x200?text=Analytics" alt="Performance Analytics" />
                  </div>
                  <div className="gallery-item">
                    <img src="https://via.placeholder.com/300x200?text=Reports" alt="Reports" />
                  </div>
                  <div className="gallery-item">
                    <img src="https://via.placeholder.com/300x200?text=Mobile+View" alt="Mobile View" />
                  </div>
                  <div className="gallery-item">
                    <img src="https://via.placeholder.com/300x200?text=User+Profile" alt="User Profile" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Features and Details */}
            <div className="info-section">
              <div className="detail-section">
                <h2>Key Features</h2>
                <ul className="features-list">
                  <li>Centralized sports operations management</li>
                  <li>Team and player management system</li>
                  <li>Registration and booking system</li>
                  <li>Performance tracking and analytics</li>
                  <li>User authentication and authorization</li>
                  <li>Responsive design for all devices</li>
                  <li>Registration and booking system</li>
                  <li>Performance tracking and analytics</li>
                  <li>User authentication and authorization</li>
                  <li>Responsive design for all devices</li>
                </ul>
              </div>

              
            </div>
          </div>
          
        </div>
        
      </div>
      
    </section>
  )
}

export default Project2
