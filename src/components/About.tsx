import '../assets/css/About.css'

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-header-title">ABOUT ME</h2>
        <div className="about-content">
          <div className="about-skills-left">
            <div className="skills-mini-grid">
              <div className="mini-skill-card">Database Design</div>
              <div className="mini-skill-card">Cyber Security</div>
              <div className="mini-skill-card">Full-stack Development</div>
              <div className="mini-skill-card">Software Testing Fundamentals</div>
              <div className="mini-skill-card">System Design</div>
              <div className="mini-skill-card">UI/UX Implementation</div>
              <div className="mini-skill-card">Version Control</div>
              <div className="mini-skill-card">REST API</div>
            </div>
          </div>

          <div className="about-item">
            <h3>Who I Am</h3>
            <p>
              I’m an Information Systems undergraduate with a strong interest in cybersecurity and software engineering. I enjoy developing practical applications, understanding how systems work, and exploring ways to build secure and reliable solutions.
            </p>
            <p>
              Through academic projects and technical work, I’m continuously strengthening my skills in full-stack development, databases, system design, and cybersecurity. I’m eager to learn, collaborate, and gain industry experience while contributing to meaningful projects.
            </p>
            <p>
              I am currently looking for internship opportunities where I can improve my technical skills, and industry experience
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

