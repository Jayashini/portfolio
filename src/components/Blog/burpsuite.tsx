import { useNavigate } from 'react-router-dom'
import '../../assets/css/Project.css'

function burpsuiteBlog() {
    const navigate = useNavigate()

    const handleBackToProjects = () => {
        navigate('/')
        setTimeout(() => {
            const projectsSection = document.getElementById('blog')
            if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' })
            }
        }, 100)
    }

    return (
        <section id="project1-detail">
            <button className="back-button" onClick={handleBackToProjects}>
                ← Back
            </button>

            <div className="project-detail-container">
                <div className="project-detail-header">
                    <h2> My Experience with Burpsuite</h2>

                </div>

                <div className="project-detail-content">
                    <div className="detail-section">
                        <h2>Project Overview</h2>
                        <p>
                            Developed a centralized platform to manage sports operations for the University of Colombo Physical Education Department.
                            The sytem includes 7 main user roles: students, coach, equipment manager, sport's manager, captain, public user and admin.
                        </p>
                    </div>
                </div>

            </div>

        </section >
    )
}

export default burpsuiteBlog
