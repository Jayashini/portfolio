import '../assets/css/Certifications.css'

interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  link?: string
  status?: string
}

function Certifications() {
  const certifications: Certification[] = [
      {
      id: 1,
      title: "Understand Threats and Prevent Attacks",
      issuer: "Alison - CPD Certified",
      date: "2023",
      link: "https://alison.com/verify/14a55ec425"
    },
    {
      id: 2,
      title: "Python for Beginners",
      issuer: "University of Moratuwa",
      date: "2023 Verification code(fatF5QpMCT) ",
      link: "https://open.uom.lk/lms/mod/customcert/verify_certificate.php"
    },
    {
      id: 3,
      title: "Cyber Security & Data",
      issuer: "IBM SkillsBuild",
      date: "2026",
      link: "https://skills.yourlearning.ibm.com/certificate/share/4f9ef581f2ewogICJsZWFybmVyQ05VTSIgOiAiNzcxODEwNlJFRyIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIiwKICAib2JqZWN0SWQiIDogIkFMTS1DT1VSU0VfNDA1ODg3NiIKfQ8bdba320d5-10"
    },
    {
      id: 4,
      title: "Cyber Investigator: An Interactive Cybersecurity Experience",
      issuer: "IBM SkillsBuild",
      date: "2026",
      link: "https://skills.yourlearning.ibm.com/certificate/PLAN-A273AA80C96E"
    },
    {
      id: 5,
      title: "Earned a Credential - Getting Started with Cybersecurity",
      issuer: "IBM SkillsBuild",
      date: "2026",
      link: "https://skills.yourlearning.ibm.com/certificate/PLAN-C7EE7CC95370"
    },
    {
      id: 6,
      title: "[BETA] Subnetting Mastery",
      issuer: "Cisco Networking Academy",
      date: "2026",
      link: " "
    },
    {
      id: 7,
      title: "Networking Devices and Initial Configuration",
      issuer: "Cisco Networking Academy",
      date: "2026",
      status: "In Progress"
    }
  ]

  return (
    <section id="certification">
      <div className="certifications-grid">
        {certifications.map((cert) => (
          <div key={cert.id} className="certification-card">

            <h3>{cert.title}</h3>
            <p className="issuer">{cert.issuer}</p>
            <p className="date">{cert.date}</p>
            {cert.link ? (
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="view-cert-link">
                View Certificate
              </a>
            ) : cert.status ? (
              <span className={`status-badge-link status-${cert.status.toLowerCase().replace(/\s+/g, '-')}`}>
                {cert.status}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certifications
