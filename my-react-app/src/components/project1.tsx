import { useNavigate } from 'react-router-dom'
import p1Imageeqrr from '../assets/img/p1.eqrr.png'
import p1Imageeq from '../assets/img/p1.eq.jpeg'
import p1Imageeqe from '../assets/img/p1.eqe.png'
import p1Imageeqr from '../assets/img/p1.eqr.png'
import p1Imageeqs from '../assets/img/p1.eqs.png'
import p1Imagehome from '../assets/img/p1.home.png'
import p1Imagesp from '../assets/img/p1.sp.jpeg'
import p1Imagespp from '../assets/img/p1.spp.png'
import p1Imagespc from '../assets/img/p1.spc.png'
import '../assets/css/project.css'

function Project1() {
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
                    <img src={p1Imagehome} alt="Home View" />
                  </div>

                  <div className="gallery-item">
                    <img src={p1Imageeq} alt="eq manager dash board" />
                  </div>
                  <div className="gallery-item">
                    <img src={p1Imageeqs} alt="sports" />
                  </div>
                                    <div className="gallery-item">
                    <img src={p1Imageeqrr} alt="requests" />
                  </div>
                  <div className="gallery-item">
                    <img src={p1Imageeqe} alt="Equalizer Edit View" />
                  </div>

                  <div className="gallery-item">
                    <img src={p1Imageeqr} alt="Equalizer Results View" />
                  </div>


                  <div className="gallery-item">
                    <img src={p1Imagesp} alt="Sports Profile" />
                  </div>
                  <div className="gallery-item">
                    <img src={p1Imagespp} alt="Sports Profile" />
                  </div>
                  <div className="gallery-item">
                    <img src={p1Imagespc} alt="Sports Profile" />
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
                </ul>
              </div>

              <div className="detail-section">
                <h2>Project Details</h2>
                <p>
                  This project was built to streamline the management of sports activities at the University of Colombo. 
                  It provides a comprehensive solution for administrators to manage schedules, teams, and player information 
                  efficiently. The system also allows students to register for sports events and track their performance.
                </p>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      
    </section>
  )
}

export default Project1
