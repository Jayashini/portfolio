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
      <div className="project-detail-container">
        <button className="back-button" onClick={handleBackToProjects}>
          ← Back to Projects
        </button>

        <div className="project-detail-header">
          <span className="project-detail-category">FIRE DETECTION SYSTEM</span>
          <h2>FiremeX</h2>
        </div>

        <div className="project-detail-content">
          <div className="detail-section">
            <h2>Project Overview</h2>
            <p>
              An AI-powered software-based fire detection system for CCTV platforms, utilizing advanced computer vision models to identify thermal anomalies and smoke patterns in real-time.
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
                  <li>AI-powered computer vision thermal anomaly detection</li>
                  <li>Real-time live camera feed monitoring & alert dashboard</li>
                  <li>User authentication & gateway registration control</li>
                  <li>Centralized incident logging & analytical dashboard</li>
                  <li>Responsive cross-device user interface</li>
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
