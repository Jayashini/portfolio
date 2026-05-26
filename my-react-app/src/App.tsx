import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Certifications from './components/Certifications'
import Navigation from './components/Navigation'
import About from './components/About'
import Projects from './components/Projects'
import Leadership from './components/Leadership'
import Skills from './components/Skills'
import Project1 from './components/project1'
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
      </Routes>
    </>
  )
}

function HomePage() {
  return (
    <>
      <section className="profile-section">
        <img src="/profile.jpg" alt="Jayashini Jayaweera" className="profile-image" />
      </section>

      <section id="center">
      <div className="ticks">
           
        <div id="Home">  
          <div className="container">
            <div className="content">
              <br />
              <h1>Hi, I'm Jayashini Jayaweera </h1>
              <br />

              <p>This is my professional profile. I'm a passionate developer with expertise in React, TypeScript, and modern web technologies.</p>
            </div>


          </div>
              <br />
              <br />
              <br />
              <br />
        </div>

      </div>
       </section>


      <div id="about">
<About />
      </div>
      
            <section id="certifications">
      <div className="ticks">
      <section id="next-steps">
        <div id="docs">
          <h1>Certifications </h1>
          <p>This is my certifications & Credentials </p>
          <Certifications />        
        </div>
      </section>
      </div>
</section>

      <Projects />

      <Leadership />

      <Skills />

      
      <section id="next-steps">
      <div className="ticks">
      <div id="social">
          
          <section id="connect">

          <h1>Connect</h1>
          <p>Connect with ....</p>
          <ul>
            <li>
              <a href="https://github.com/Jayashini" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jayashini-jayaweera/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#linkedin-icon"></use>
                </svg>
                LinkedIn
              </a>
            </li>
            </ul>
            </section>
        </div>
        </div>
        </section>

    </>
  )
}

export default App
