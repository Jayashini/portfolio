import '../assets/css/Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Jayashini Jayaweera</h3>
            
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Jayashini Jayaweera. All rights reserved.</p>
        </div>
      </div>

      <div className="footer-gradient"></div>
    </footer>
  )
}

export default Footer
