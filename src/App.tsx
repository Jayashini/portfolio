import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Certifications from './components/Certifications'
import Navigation from './components/Navigation'
import About from './components/About'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Project1 from './components/Project1'
import Project2 from './components/Project2'
import resumePDF from './assets/resume/Jayashini.pdf'
import './App.css'
import Blog from './components/Blog'
import BurpsuiteBlog from './components/Blog/burpsuite'

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

function AppContent() {
  const location = useLocation()
  const showNavigation = location.pathname === '/'

  return (
    <>
      {showNavigation && <Navigation />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/1" element={<Project1 />} />
        <Route path="/project/2" element={<Project2 />} />
        <Route path="/blog/Burpsuite" element={<BurpsuiteBlog />} />
      </Routes>
    </>
  )
}

function HomePage() {
  return (
    <>
      <section id="center">
        <div id="Home" className="ticks">
          <div className="container">
            <div className="content">
              <span className="subtitle">HELLO & WELCOME</span>
              <h1>I'M <br /><span className="name-gradient">JAYASHINI JAYAWEERA</span></h1>
              <p>A passionate Information Systems Undergraduate at University of Colombo School of Computing (UCSC), specializing in cybersecurity, full-stack software engineering, and database systems.</p>
              
              <div className="hero-cta-group">
                <a 
                  href="#about" 
                  className="cta-button primary-cta"
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.getElementById('about')
                    if (element) {
                      const yOffset = -75
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                      window.scrollTo({ top: y, behavior: 'smooth' })
                    }
                  }}
                >
                  ABOUT ME
                  <svg className="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="profile-section">
              <div className="profile-card-frame">
                <img src="/profile.jpg" alt="Jayashini Jayaweera" className="profile-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="about">
        <About />
      </div>

      <Leadership />

      <section id="certifications">
        <Certifications />
      </section>

      <Projects />

      <Skills />
      <Blog />

      <section id="connect">
        <h2 className="section-header-title">GET IN TOUCH</h2>
        <p className="section-header-subtitle">Feel free to connect, collaborate, or download my resume</p>
        
        <div className="contact-card-container">
          <div className="contact-email-box">
            <div className="email-info">
              <span className="email-label">DIRECT EMAIL</span>
              <a href="mailto:jayashinisjayaweera@gmail.com" className="email-address">
                jayashinisjayaweera@gmail.com
              </a>
            </div>
            <a 
              href="mailto:jayashinisjayaweera@gmail.com" 
              className="send-email-btn"
            >
              <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
          </div>

          <div className="contact-social-row">
            <a href="https://github.com/Jayashini" target="_blank" rel="noopener noreferrer" className="social-pill outlined-btn">
              <svg className="button-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </a>

            <a href="https://www.linkedin.com/in/jayashini-jayaweera/" target="_blank" rel="noopener noreferrer" className="social-pill outlined-btn">
              <svg className="button-icon" viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>

            <a href={resumePDF} download="Jayashini_Jayaweera_Resume.pdf" className="social-pill download-btn">
              <svg className="button-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
