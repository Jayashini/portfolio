import '../assets/css/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScroll = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -75
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <footer id="footer">
      <div className="footer-gradient"></div>
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <h3 className="footer-name">JAYASHINI JAYAWEERA</h3>
            <p className="footer-tagline">Information Systems Undergraduate • UCSC</p>
          </div>

          <div className="footer-nav">
            <span onClick={() => handleScroll('about')}>About</span>
            <span onClick={() => handleScroll('leadership')}>Volunteering</span>
            <span onClick={() => handleScroll('certifications')}>Certifications</span>
            <span onClick={() => handleScroll('projects')}>Projects</span>
            <span onClick={() => handleScroll('skills')}>Technologies</span>
            <span onClick={() => handleScroll('blog')}>Blog</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Jayashini Jayaweera</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
