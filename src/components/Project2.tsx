import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import '../assets/css/Project.css'
import login from '../assets/img/firemex/login.png'
import cameralive from '../assets/img/firemex/cameralive feed.png'
import dashboard from '../assets/img/firemex/dashboard.png'
import registration from '../assets/img/firemex/RegistrationGateway.png'
function Project2() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

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
                    <img src={login} alt="Dashboard View" />
                  </div>
                  <div className="gallery-item">
                    <img src={cameralive} alt="Team Management" />
                  </div>
                  <div className="gallery-item">
                    <img src={dashboard} alt="Scheduling System" />
                  </div>
                  <div className="gallery-item">
                    <img src={registration} alt="Registration Form" />
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
