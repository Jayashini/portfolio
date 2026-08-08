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
            <span onClick={() => handleScroll('about')}>ABOUT</span>
          </li>
          <li>
            <span onClick={() => handleScroll('leadership')}>VOLUNTEERING</span>
          </li>
          <li>
            <span onClick={() => handleScroll('certifications')}>CERTIFICATIONS</span>
          </li>
          <li>
            <span onClick={() => handleScroll('projects')}>PROJECTS</span>
          </li>
          <li>
            <span onClick={() => handleScroll('skills')}>TECHNOLOGIES</span>
          </li>
          <li>
            <span onClick={() => handleScroll('blog')}>BLOG</span>
          </li>
        </ul>

        {/* Right Email Pill */}
        <a 
          href="mailto:jayashinisjayaweera@gmail.com" 
          className="navbar-email-pill"
          onClick={(e) => {
            e.preventDefault();
            navigator.clipboard.writeText("jayashinisjayaweera@gmail.com");
            alert("Email copied to clipboard: jayashinisjayaweera@gmail.com");
            window.location.href = "mailto:jayashinisjayaweera@gmail.com";
          }}
        >
          EMAIL ME
        </a>
      </div>
    </nav>
  )
}

export default Navigation
