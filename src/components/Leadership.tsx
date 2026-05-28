import '../assets/css/Leadership.css'

interface LeadershipRole {
  id: number
  title: string
  period: string
  description: string
  color: 'orange' | 'magenta' | 'purple' | 'lightgreen' | 'teal' | 'blue' | 'cyan' | 'pink' | 'yellow'
  icon: string
}

// Icon components (minimalistic line-art style)
const LeadershipIcons = {
  secretary: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2a6 6 0 0 1 6 6v2a4 4 0 0 1 4 4v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a4 4 0 0 1 4-4v-2a6 6 0 0 1 6-6z"/>
    </svg>
  ),
  coordinator: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4"/>
      <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6"/>
    </svg>
  ),
  member: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  volunteer: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7c0-.55.45-1 1-1s1 .45 1 1v1.9h4c1.71 0 3.1 1.39 3.1 3.1v8.1H3.9V12z"/>
      <path d="M8 19v2M16 19v2"/>
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 12h6m-3-3v6M12 3v18M9 9l3-3 3 3M18 6l3 3-3 3"/>
    </svg>
  ),
}

function Leadership() {
  const leadershipRoles: LeadershipRole[] = [
    {
      id: 1,
      title: "Assistant Secretary",
      period: "2025 July - Present",
      description: "As a Assistant Secretary of the Rotaract Club of UCSC, I have gained valuable experience in event organization, management & event coordination as well as reporting.",
      color: "orange",
      icon: "coordinator"
    },
    {
      id: 2,
      title: "Faculty Coordinator - UCSC",
      period: "July 2025 - Present",
      description: "As a Faculty Coordinator of the Leo Club of UOC, I have gained valuable experience in team management, and how to manage instant situations",
      color: "magenta",
      icon: "coordinator"
    },
    {
      id: 3,
      title: "Member - Publicity Team",
      period: "2025 - 2026",
      description: "In CSSL Genz Chapter, I have good experience on working with people have better understand of how to hadle any kind of situation in any time where i need to involve. ",
      color: "purple",
      icon: "member"
    },
    {
      id: 4,
      title: "Member - Content Team",
      period: "2024 - Present",
      description: "In ACM Students' Branch UCSC, I improved my skills on giving better understand about an each event & make an excitement among the people.",
      color: "teal",
      icon: "member"
    },
    {
      id: 5,
      title: "Member - Public Relations ",
      period: "2024 - Present",
      description: " ",
      color: "lightgreen",
      icon: "member"
    }

  ]

  return (
    <section id="leadership">
                    <br />
              <br />
              <br />
              <br />
      <h2>Leadership & Volunteering</h2>
      
      <div className="leadership-timeline">
        {leadershipRoles.map((role) => (
          <div key={role.id} className={`timeline-item timeline-item-${role.color}`}>
            {/* Connector line from node to main timeline */}
            <div className="connector-line"></div>
            
            {/* Colored node with icon */}
            <div className={`timeline-node node-${role.color}`}>
              <div className="node-icon">
                {LeadershipIcons[role.icon as keyof typeof LeadershipIcons]}
              </div>
            </div>
            
            {/* Text content */}
            <div className="timeline-content">
              <div className="content-header">
                <h3>{role.title}</h3>
                <span className="period">{role.period}</span>
              </div>
              <p className="description">{role.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Leadership
