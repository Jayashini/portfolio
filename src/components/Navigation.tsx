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
          <svg className="planet-icon transition-colors w-5 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
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
            <a href="#certifications" onClick={(e) => { e.preventDefault(); handleScroll('certifications'); }}>CERTIFICATIONS</a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => { e.preventDefault(); handleScroll('projects'); }}>PROJECTS</a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => { e.preventDefault(); handleScroll('skills'); }}>TECHNOLOGIES</a>
          </li>
          <li>
            <a href="#blog" onClick={(e) => { e.preventDefault(); handleScroll('blog'); }}>BLOG</a>
          </li>

        </ul>

        {/* Right Email Pill */}
        <a href="mailto:[EMAIL_ADDRESS]" className="navbar-email-pill">
          jayashinisjayaweera@gmail.com
        </a>
      </div>
    </nav>
  )
}

export default Navigation
