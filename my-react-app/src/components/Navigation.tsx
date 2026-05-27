import '../assets/css/Navigation.css'

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#center" className="navbar-link">Home</a>
          </li>
          <li className="navbar-item">
            <a href="#about" className="navbar-link">About</a>
          </li>
          <li className="navbar-item">
            <a href="#projects" className="navbar-link">Projects</a>
          </li>
          <li className="navbar-item">
            <a href="#leadership" className="navbar-link">Leadership</a>
          </li>
          <li className="navbar-item">
            <a href="#skills" className="navbar-link">Skills</a>
          </li>
          <li className="navbar-item">
            <a href="#certifications" className="navbar-link">Certifications</a>
          </li>
          <li className="navbar-item">
            <a href="#connect" className="navbar-link">Connect</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
