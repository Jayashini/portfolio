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
              Developed a centralized platform to manage sports operations for the University of Colombo Physical Education Department.
              The sytem includes 7 main user roles: students, coach, equipment manager, sport's manager, captain, public user and admin.
            </p>
          </div>

          <div className="project-layout">
            {/* Left side - Gallery */}
            <div className="gallery-section">
              <div className="detail-section">
                <h2>Gallery</h2>
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
                  <li>User Privilege Management - Admins will be able to manage roles and access levels, ensuring only authorized users can perform sensitive actions like bookings, equipment changes, and budget handling.</li>
                  <li>Equipment Management - Admin can add, update, and monitor the inventory. Equipment Manager can track availability, assign equipment to users, and view borrowing history. </li>
                  <li>Facility Booking - Both internal and external users can request bookings for sports grounds or indoor facilities. External users will be required to make payments through the system. </li>
                  
                  <li>Practice Scheduling - Sports captains and managers can schedule regular and extra practice sessions. This ensures organized usage of grounds and avoids conflicts. </li>
                  <li>Sports Records - The system maintains individual profiles of players, tracking their participation, achievements, and performance stats. </li>
                  <li>Team Management - Captains can add team members, manage rosters, and communicate with players.</li>
                  <li>Attendance Marking - Attendance for practices can be marked digitally by captains to help track participation.</li>
                  <li>Injury Reporting & Substitutions - Coaches can report player injuries and suggest suitable replacements, improving safety and game readiness. </li>
                  
                  <li>Sports Manager Assignment - Specific sports managers assigned for particular games, ensuring accountability. </li>
                  <li>Budget Management - Admins can allocate budgets per sport and sport manager upload related proof documents to maintain financial transparency. </li>
                  <li>Identity Verification - Equipment managers can verify users when borrowing items , the users who are already enrolled in the system. </li>
                  <li>Newsfeed & Events - Admins and managers can post announcements, events, and updates for all users to view.</li>
                  
                  <li>Profiles & Feedback - All users can manage their own profile information and provide feedback or inquiries to the PE Department.</li>
                  
                  

                </ul>
              </div>

              {/* Project Details section - Provides comprehensive overview of the project, its purpose, and implementation
              <div className="detail-section">
                <h2>Project Details</h2>
                <p>
                  This project was built to streamline the management of sports activities at the University of Colombo Physical Education Department. 
                  It provides a comprehensive solution for administrators to manage schedules, teams, and player information 
                  efficiently. The system also allows students to register for sports events and track their performance.
                </p>
              </div>
               */}
            </div>
          </div>
          
        </div>
        
      </div>
      
    </section>
  )
}

export default Project1
