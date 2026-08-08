import '../assets/css/About.css'

function About() {
  return (
    <section id="about" className="about-section">
      <div>

        <br />
        <br />
        <br />
        <h1>ABOUT ME</h1>
        <br />
        <div className="about-content">
          <div className="about-skills-left">
            <div className="skills-mini-grid">
              <div className="mini-skill-card">React.js</div>
              <div className="mini-skill-card">TypeScript</div>
              <div className="mini-skill-card">JavaScript</div>
              <div className="mini-skill-card">Node.js</div>
              <div className="mini-skill-card">Python</div>
              <div className="mini-skill-card">MySQL</div>
              <div className="mini-skill-card">Linux</div>
              <div className="mini-skill-card">Git</div>
            </div>
          </div>

          <div className="about-item">

            <h3>Who I Am</h3>
            <br />
            <p>
              I'm passionate about cybersecurity and further, interests in web development.
              I enjoy building practical systems that solve real-world problems and continuously learning new technologies.

              I am currently looking for internship opportunities where I can improve my technical skills, teamwork, and industry experience
            </p>
            <br />
          </div>
        </div>
        <br />
      </div>
    </section>
  )
}

export default About
