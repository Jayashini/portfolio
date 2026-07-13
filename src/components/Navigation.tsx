import '../assets/css/Navigation.css'

function Navigation() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar-floating-wrapper">
      <div className="navbar-pill">
        {/* Left Planet Circle Logo */}
        <div className="navbar-logo-circle" onClick={() => handleScroll('Home')}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="planet-icon">
            <circle cx="12" cy="12" r="6" />
            <path d="M2 12h20M5.9 7.9a13 13 0 0 0 12.2 0" />
            <path d="M18.1 16.1a13 13 0 0 0-12.2 0" />
          </svg>
        </div>

        {/* Center Menu Links */}
        <ul className="navbar-links">
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>ABOUT</a>
          </li>
          <li>
            <a href="#leadership" onClick={(e) => { e.preventDefault(); handleScroll('leadership'); }}>VOLUNTEERING</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}>PROJECTS</a>
          </li>
          <li>
            <a href="#certifications" onClick={(e) => { e.preventDefault(); handleScroll('certifications'); }}>CERTIFICATIONS</a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll('skills'); }}>TECHNOLOGIES</a>
          </li>
          <li>
            <a href="#blog" onClick={(e) => { e.preventDefault(); handleScroll('blog'); }}>BLOG</a>
          </li>

        </ul>

        {/* Right Email Pill */}
        <a href="mailto:jayashinisjayaweera@gmail.com" className="navbar-email-pill">
          jayashinisjayaweera@gmail.com
        </a>
      </div>
    </nav>
  )
}

export default Navigation
