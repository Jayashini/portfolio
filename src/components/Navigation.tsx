import { useState, useEffect } from 'react'
import '../assets/css/Navigation.css'

function Navigation() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const sectionIds = ['about', 'leadership', 'certifications', 'projects', 'skills', 'blog', 'connect']
    
    const handleScrollObserver = () => {
      const scrollPosition = window.scrollY + 180

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section) {
          const sectionTop = section.offsetTop
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScrollObserver)
    return () => window.removeEventListener('scroll', handleScrollObserver)
  }, [])

  const handleScroll = (id: string) => {
    setMobileMenuOpen(false)
    if (id === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -75
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar-floating-wrapper">
      <div className="navbar-pill">
        {/* Left Name Brand Logo */}
        <div className="navbar-logo-brand" onClick={() => handleScroll('Home')}>
          <span className="navbar-logo-text">JAYASHINI JAYAWEERA</span>
        </div>

        {/* Center Menu Links (Desktop) */}
        <ul className="navbar-links desktop-links">
          <li>
            <span className={activeSection === 'about' ? 'nav-active' : ''} onClick={() => handleScroll('about')}>ABOUT</span>
          </li>
          <li>
            <span className={activeSection === 'leadership' ? 'nav-active' : ''} onClick={() => handleScroll('leadership')}>VOLUNTEERING</span>
          </li>
          <li>
            <span className={activeSection === 'certifications' ? 'nav-active' : ''} onClick={() => handleScroll('certifications')}>CERTIFICATIONS</span>
          </li>
          <li>
            <span className={activeSection === 'projects' ? 'nav-active' : ''} onClick={() => handleScroll('projects')}>PROJECTS</span>
          </li>
          <li>
            <span className={activeSection === 'skills' ? 'nav-active' : ''} onClick={() => handleScroll('skills')}>TECHNOLOGIES</span>
          </li>
          <li>
            <span className={activeSection === 'blog' ? 'nav-active' : ''} onClick={() => handleScroll('blog')}>BLOG</span>
          </li>
        </ul>

        {/* Right Email Pill */}
        <a 
          href="#connect" 
          className="navbar-email-pill desktop-pill"
          onClick={(e) => {
            e.preventDefault();
            handleScroll('connect');
          }}
        >
          GET IN TOUCH
        </a>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile navigation menu"
        >
          {mobileMenuOpen ? (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay">
          <ul className="mobile-drawer-links">
            <li>
              <span className={activeSection === 'about' ? 'nav-active' : ''} onClick={() => handleScroll('about')}>ABOUT</span>
            </li>
            <li>
              <span className={activeSection === 'leadership' ? 'nav-active' : ''} onClick={() => handleScroll('leadership')}>VOLUNTEERING</span>
            </li>
            <li>
              <span className={activeSection === 'certifications' ? 'nav-active' : ''} onClick={() => handleScroll('certifications')}>CERTIFICATIONS</span>
            </li>
            <li>
              <span className={activeSection === 'projects' ? 'nav-active' : ''} onClick={() => handleScroll('projects')}>PROJECTS</span>
            </li>
            <li>
              <span className={activeSection === 'skills' ? 'nav-active' : ''} onClick={() => handleScroll('skills')}>TECHNOLOGIES</span>
            </li>
            <li>
              <span className={activeSection === 'blog' ? 'nav-active' : ''} onClick={() => handleScroll('blog')}>BLOG</span>
            </li>
            <li>
              <a 
                href="#connect" 
                className="mobile-email-pill"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll('connect');
                }}
              >
                GET IN TOUCH
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navigation
