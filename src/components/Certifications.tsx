import { useState } from 'react'
import alisonLogo from '../assets/img/logo/alison.png'
import uomLogo from '../assets/img/logo/University_of_Moratuwa.png'
import ibmLogo from '../assets/img/logo/ibm skill build.png'
import ciscoLogo from '../assets/img/logo/cisco networking academy.jpg'
import linkedinLogo from '../assets/img/logo/linkedin.png'
import '../assets/css/Certifications.css'

interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  verification?: string
  link?: string
  status?: string
}

function Certifications() {
  const [visibleCount, setVisibleCount] = useState<number>(6)

  const certifications: Certification[] = [
    {
      id: 1,
      title: "Understand Threats & Prevent Attacks",
      issuer: "Alison - CPD",
      date: "2023",
      verification: "ALISON - CPD",
      link: "https://alison.com/verify/14a55ec425"
    },
    {
      id: 2,
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      date: "2023",
      verification: "fatF5QpMCT",
      link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php"
    },
    {
      id: 3,
      title: "Cyber Security & Data",
      issuer: "IBM SkillsBuild",
      date: "2026",
      verification: "IBM SkillsBuild",
      link: "https://skills.yourlearning.ibm.com/certificate/share/4f9ef581f2ewogICJsZWFybmVyQ05VTSIgOiAiNzcxODEwNlJFRyIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIiwKICAib2JqZWN0SWQiIDogIkFMTS1DT1VSU0VfNDA1ODg3NiIKfQ8bdba320d5-10"
    },
    {
      id: 4,
      title: "Cyber Investigator: An Interactive Experience",
      issuer: "IBM SkillsBuild",
      date: "2026",
      verification: "IBM SkillsBuild",
      link: "https://skills.yourlearning.ibm.com/certificate/PLAN-A273AA80C96E"
    },
    {
      id: 5,
      title: "Earned a Credential - Getting Started",
      issuer: "IBM SkillsBuild",
      date: "2026",
      verification: "IBM SkillsBuild",
      link: "https://skills.yourlearning.ibm.com/certificate/PLAN-C7EE7CC95370"
    },
    {
      id: 6,
      title: "Subnetting Mastery [BETA]",
      issuer: "Cisco Networking Academy",
      date: "2026",
      verification: "Cisco",
      link: "https://skillsforall.com/credentials/subnetting-mastery"
    },
    {
      id: 7,
      title: "Designing RESTful APIs",
      issuer: "LinkedIn Learning Community",
      date: "2026",
      verification: "Linkedin",
      link: "https://www.linkedin.com/learning/certificates/fa75d7566ed08519e26eaedab73bec744ae3c53b14187decb2a4cfffb04ed117?trk=share_certificate"
    },
    {
      id: 8,
      title: "Understanding Manual Testing",
      issuer: "LinkedIn Learning Community",
      date: "2026",
      verification: "Linkedin",
      link: "https://www.linkedin.com/learning/certificates/ec7c771d69c0998c4e242cbae2c167dbb2b38c3263ffde6e17efe8e641836c4c?trk=share_certificate"
    },
    {
      id: 9,
      title: "Learning Go",
      issuer: "LinkedIn Learning Community",
      date: "2026",
      verification: "Linkedin",
      link: "https://www.linkedin.com/learning/certificates/ea219ed7be4e09d6e0bb0f47ac8a15849862045518e3463ef90ad06333968d65?trk=share_certificate"
    },
    {
      id: 10,
      title: "Burp Suite Essential Training",
      issuer: "LinkedIn Learning Community",
      date: "2026",
      verification: "Linkedin",
      link: "https://www.linkedin.com/learning/certificates/4646da7c888be1139717ba6668e568a933e94126b0675dfd7c2403aa5105c26a?trk=share_certificate"
    },
    {
      id: 11,
      title: "Networking Devices & Initial Configuration",
      issuer: "Cisco Networking Academy",
      date: "2026",
      verification: "Cisco",
      status: "In Progress"
    }
  ]

  const displayedCertifications = certifications.slice(0, visibleCount)

  const getIssuerLogo = (issuer: string) => {
    const lowerIssuer = issuer.toLowerCase()
    if (lowerIssuer.includes('alison')) {
      return (
        <div className="logo-wrapper alison-logo">
          <img src={alisonLogo} alt="Alison Logo" className="issuer-logo-img" />
        </div>
      )
    }
    if (lowerIssuer.includes('moratuwa')) {
      return (
        <div className="logo-wrapper uom-logo">
          <img src={uomLogo} alt="University of Moratuwa Logo" className="issuer-logo-img" />
        </div>
      )
    }
    if (lowerIssuer.includes('ibm')) {
      return (
        <div className="logo-wrapper ibm-logo">
          <img src={ibmLogo} alt="IBM SkillsBuild Logo" className="issuer-logo-img" />
        </div>
      )
    }
    if (lowerIssuer.includes('linkedin')) {
      return (
        <div className="logo-wrapper linkedin-logo">
          <img src={linkedinLogo} alt="LinkedIn Learning Logo" className="issuer-logo-img" />
        </div>
      )
    }
    if (lowerIssuer.includes('cisco')) {
      return (
        <div className="logo-wrapper cisco-logo">
          <img src={ciscoLogo} alt="Cisco Networking Academy Logo" className="issuer-logo-img" />
        </div>
      )
    }
    return (
      <div className="logo-wrapper default-logo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      </div>
    )
  }

  return (
    <section id="certifications">
      <h2 className="section-header-title">CERTIFICATIONS</h2>
      <p className="section-header-subtitle">These credentials serve as verifiable proof of my knowledge and technical skills.</p>

      <div className="certifications-grid">
        {displayedCertifications.map((cert) => (
          <div key={cert.id} className="certification-card">
            <div className="card-header">
              {getIssuerLogo(cert.issuer)}
              <h3>{cert.title}</h3>
            </div>

            <div className="card-body">
              <p className="issuer-name">{cert.issuer}</p>
              <p className="issued-date">Issued: {cert.date}</p>
              {cert.verification && cert.issuer.includes('Moratuwa') && (
                <p className="verification-text">Verification: {cert.verification}</p>
              )}
            </div>

            <div className="card-footer">
              {cert.link && cert.link.trim() !== "" ? (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-cert-button">
                  View Certificate
                  <svg className="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ) : cert.status ? (
                <span className={`status-badge-pill status-${cert.status.toLowerCase().replace(/\s+/g, '-')}`}>
                  {cert.status}
                </span>
              ) : (
                <span className="status-badge-pill status-completed">Completed</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {visibleCount < certifications.length ? (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={() => setVisibleCount(prev => prev + 6)}>
            Load More Certifications
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      ) : certifications.length > 6 ? (
        <div className="load-more-container">
          <button className="load-more-btn outlined-load-btn" onClick={() => setVisibleCount(6)}>
            Show Less
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      ) : null}
    </section>
  )
}

export default Certifications

