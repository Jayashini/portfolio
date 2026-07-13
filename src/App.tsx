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
      </Routes>
    </>
  )
}

function HomePage() {
  return (
    <>


      <section id="center">
        <div className="ticks">

          <div id="Home">
            <div className="container">
              <div className="content">
                <br />
                <br />
                <span className="subtitle">HELLO</span>
                <h1>I'M <br />JAYASHINI JAYAWEERA</h1>
                <p>This is my portfolio to get to know about me. Currently, I'm a third-year Information Systems Undergraduate at University of Colombo School of Computing.</p>
                <a href="#about" className="cta-button">ABOUT ME</a>
              </div>
              <div className="profile-section">
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
        <div className="ticks">
          <section id="next-steps">

            <div id="docs">
              <br />


              <h1>CERTIFICATIONS </h1>
              <p>This is my certifications & Credentials </p>
              <Certifications />
            </div>
          </section>
        </div>
      </section>

      <Projects />

      <Skills />


      <section id="next-steps">
        <div className="ticks">
          <div id="social">

            <section id="connect">
              <h1>Connect</h1>
              <p>Connect with me or download my resume</p>
              <ul>
                <li>
                  <a href="https://github.com/Jayashini" target="_blank" rel="noopener noreferrer" className="resume-button">
                    <svg className="button-icon" role="presentation" aria-hidden="true">
                      <use href="/icons.svg#github-icon"></use>
                    </svg>
                    GitHub
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/jayashini-jayaweera/" target="_blank" rel="noopener noreferrer" className="resume-button">
                    <svg className="button-icon" role="presentation" aria-hidden="true" >
                      <use href="/icons.svg#linkedin-icon"></use>
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={resumePDF} download="Jayashini_Jayaweera_Resume.pdf" className="resume-button">
                    Download My Resume
                  </a>
                </li>
              </ul>


            </section>



          </div>
        </div>
      </section>
      <Footer />


    </>
  )
}

export default App
