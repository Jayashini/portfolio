import '../assets/css/Skills.css'

interface Skill {
  name: string
  color: string
}

interface SkillSection {
  title: string
  skills: Skill[]
}

function Skills() {
  const skillSections: SkillSection[] = [
    {
      title: "Languages",
      skills: [
        { name: "PHP", color: "color-php" },
        { name: "JavaScript", color: "color-js" },
        { name: "TypeScript", color: "color-ts" },
        { name: "Python", color: "color-python" },
        { name: "C/C++", color: "color-cpp" },
        { name: "GO", color: "color-go" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", color: "color-react" },
        { name: "Tailwind CSS", color: "color-tailwind" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", color: "color-nodejs" },
        { name: "Next.js", color: "color-nextjs" }
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", color: "color-mysql" },
        { name: "MongoDB", color: "color-mongodb" }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", color: "color-git" },
        { name: "Linux", color: "color-linux" },
        { name: "Figma", color: "color-figma" },
        { name: "Burp Suite", color: "color-burp" }
      ]
    }
  ]

  const getTechIcon = (name: string) => {
    const lowerName = name.toLowerCase()
    
    if (lowerName.includes('javascript')) {
      return (
        <svg className="tech-icon" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="3" fill="#F7DF1E" />
          <path d="M19.8 18.5c-.2.8-.7 1.4-1.5 1.7-.8.3-1.6.3-2.3 0-.6-.3-1.1-.8-1.3-1.5h1.9c.1.3.4.6.7.7.3.1.7 0 1-.2.2-.2.3-.5.3-.8 0-.4-.2-.7-.6-.9l-.9-.3c-.8-.3-1.4-.6-1.7-1.1-.3-.4-.4-.9-.4-1.5 0-.7.3-1.3.8-1.7.5-.4 1.2-.6 2-.6.7 0 1.3.2 1.8.5.5.4.8.9.9 1.5h-1.8c-.1-.3-.2-.5-.5-.6-.2-.1-.5-.1-.7 0-.3.1-.4.3-.4.6 0 .3.2.5.5.6l.8.3c.9.3 1.5.7 1.8 1.1.4.5.5 1.1.4 1.7zm-6.2.2c-.3.5-.8.8-1.4.9-.6.1-1.3 0-1.8-.3-.5-.4-.8-.9-.9-1.5h1.8c.1.3.3.4.5.5.3.1.6 0 .8-.2.2-.2.3-.5.3-.9v-5.6h1.9v5.7c0 .9-.1 1.7-.4 2.4z" fill="#000000" />
        </svg>
      )
    }
    if (lowerName.includes('typescript')) {
      return (
        <svg className="tech-icon" viewBox="0 0 24 24">
          <rect width="24" height="24" rx="3" fill="#3178C6" />
          <path d="M19.8 18.5c-.2.8-.7 1.4-1.5 1.7-.8.3-1.6.3-2.3 0-.6-.3-1.1-.8-1.3-1.5h1.9c.1.3.4.6.7.7.3.1.7 0 1-.2.2-.2.3-.5.3-.8 0-.4-.2-.7-.6-.9l-.9-.3c-.8-.3-1.4-.6-1.7-1.1-.3-.4-.4-.9-.4-1.5 0-.7.3-1.3.8-1.7.5-.4 1.2-.6 2-.6.7 0 1.3.2 1.8.5.5.4.8.9.9 1.5h-1.8c-.1-.3-.2-.5-.5-.6-.2-.1-.5-.1-.7 0-.3.1-.4.3-.4.6 0 .3.2.5.5.6l.8.3c.9.3 1.5.7 1.8 1.1.4.5.5 1.1.4 1.7zm-9.3.2H8.6V9.4H4.5V7.7h10.2v1.7h-4.2v9.3z" fill="#FFFFFF" />
        </svg>
      )
    }
    if (lowerName.includes('php')) {
      return (
        <svg className="tech-icon" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="12" rx="11" ry="7" fill="#777BB4" />
          <path d="M7.5 14h-1.2v-4h1.2c.6 0 1 .3 1 1s-.4 1-1 1h-1v2zm5 0h-1.2v-1.8h1.2c.6 0 1 .3 1 1s-.4.8-1 .8h-1V14zm5 0H16.3v-4h1.2c.6 0 1 .3 1 1s-.4 1-1 1h-1v2z" fill="#000000" />
        </svg>
      )
    }
    if (lowerName.includes('python')) {
      return (
        <svg className="tech-icon" viewBox="0 0 24 24" fill="none">
          <path d="M12 2c-3.1 0-2.9 1.3-2.9 2.7v2.2h5.8V4.7C14.9 3.3 15.1 2 12 2z" fill="#3776AB" />
          <path d="M12 22c3.1 0 2.9-1.3 2.9-2.7v-2.2H9.1v2.2c0 1.4-.2 2.7 2.9 2.7z" fill="#FFE873" />
          <path d="M9.1 14.4V9.6h5.8v4.8H9.1z" fill="#3776AB" />
          <path d="M14.9 9.6v4.8H9.1V9.6h5.8z" fill="#FFE873" />
          <circle cx="10.5" cy="5.5" r="0.75" fill="#FFFFFF" />
          <circle cx="13.5" cy="18.5" r="0.75" fill="#000000" />
        </svg>
      )
    }
    if (lowerName.includes('c++') || lowerName.includes('c/c++')) {
      return (
        <svg className="tech-icon" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#00599C" />
          <path d="M10 8c-2.2 0-4 1.8-4 4s1.8 4 4 4c1 0 1.9-.4 2.5-1l-1.5-1.5c-.3.3-.6.5-1 .5-1.1 0-2-.9-2-2s.9-2 2-2c.4 0 .7.2 1 .5l1.5-1.5C11.9 8.4 11 8 10 8z" fill="#FFFFFF" />
          <path d="M17 11h-1.5V9.5h-1V11H13v1h1.5v1.5h1V12H17v-1z" fill="#FFC107" />
        </svg>
      )
    }
    if (lowerName.includes('go')) {
      return (
        <svg className="tech-icon" viewBox="0 0 24 24" fill="none">
          <path d="M2 10h12v4H2v-4z" fill="#00ADD8" />
          <circle cx="18" cy="12" r="4" fill="#00ADD8" />
        </svg>
      )
    }
    if (lowerName.includes('react')) {
      return (
        <svg className="tech-icon react-spin" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2">
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
        </svg>
      )
    }
    if (lowerName.includes('tailwind')) {
      return (
        <svg className="tech-icon" viewBox="0 0 24 24" fill="#06B6D4">
          <path d="M12 6c-3 0-5.2 1.7-6 4 1.2-1.5 2.7-2 4.5-1.4 1 .3 1.7 1.1 2.5 1.9 1.3 1.3 2.7 2.8 5.9 2.8 3 0 5.2-1.7 6-4-1.2 1.5-2.7 2-4.5 1.4-1-.3-1.7-1.1-2.5-1.9C16.6 7.5 15.2 6 12 6zM6 13.3c-3 0-5.2 1.7-6 4 1.2-1.5 2.7-2 4.5-1.4 1 .3 1.7 1.1 2.5 1.9 1.3 1.3 2.7 2.8 5.9 2.8 3 0 5.2-1.7 6-4-1.2 1.5-2.7 2-4.5 1.4-1-.3-1.7-1.1-2.5-1.9C16.6 14.8 15.2 13.3 12 13.3z"/>
        </svg>
      )
    }
    if (lowerName.includes('node')) {
      return (
        <svg className="tech-icon" viewBox="0 0 24 24" fill="#339933">
          <path d="M12 2L3.5 6.9v10.2L12 22l8.5-4.9V6.9L12 2zm0 17.5l-6-3.5V8.1l6-3.5 6 3.5v7.9l-6 3.5z"/>
        </svg>
      )
    }
    if (lowerName.includes('next')) {
      return (
        <svg className="tech-icon" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="#000000" stroke="#FFFFFF" strokeWidth="1" />
          <path d="M16.5 16.5L11.8 10v6.5h-1.3V7.5h1.3l4.7 6.5V7.5h1.3v9z" fill="#FFFFFF" />
        </svg>
      )
    }
    if (lowerName.includes('mysql')) {
      return (
        <svg className="tech-icon" viewBox="0 0 24 24" fill="#4479A1">
          <path d="M12.1 2c-3.1 0-5.9.9-7.8 2.5C5.9 5.3 8.3 6 10.7 6c3.2 0 6.2-1.3 8-3.4C16.9 2.3 14.6 2 12.1 2zm1.9 14.4c-.4.4-.9.6-1.5.6s-1.1-.2-1.5-.6c-.4-.4-.6-.9-.6-1.5s.2-1.1.6-1.5c.4-.4.9-.6 1.5-.6s1.1.2 1.5.6c.4.4.6.9.6 1.5s-.2 1.1-.6 1.5z"/>
        </svg>
      )
    }
    if (lowerName.includes('mongodb')) {
      return (
        <svg className="tech-icon" viewBox="0 0 24 24" fill="#47A248">
          <path d="M12 2c0 0-4.5 4.5-4.5 9s3 6.5 4.5 9c1.5-2.5 4.5-4.5 4.5-9s-4.5-9-4.5-9zm0 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        </svg>
      )
    }
    if (lowerName.includes('git')) {
      return (
        <svg className="tech-icon" viewBox="0 0 24 24" fill="#F05032">
          <path d="M22.6 11.4L12.6 1.4c-.8-.8-2-.8-2.8 0L8.2 3.1l3 3c.6-.2 1.4 0 1.9.5.5.5.7 1.3.5 1.9l3 3c.6-.2 1.4 0 1.9.5.7.7.7 1.8 0 2.5s-1.8.7-2.5 0c-.5-.5-.7-1.2-.5-1.9l-3-3c-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.3l-3-3C6.3 9.4 6 9 6 8.5c0-.6.3-1.1.7-1.5l-3-3c-.7-.7-.7-1.8 0-2.5s1.8-.7 2.5 0l1.7 1.7L9.8 1.4c-.8-.8-2-.8-2.8 0L1.4 7.1c-.8.8-.8 2 0 2.8l10 10c.8.8 2 .8 2.8 0l8.4-8.4c.8-.9.8-2.1 0-2.9z"/>
        </svg>
      )
    }
    if (lowerName.includes('linux')) {
      return (
        <svg className="tech-icon" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="3" fill="#000000" />
          <path d="M6 8l4 4-4 4M11 15h7" stroke="#39FF14" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    }
    if (lowerName.includes('figma')) {
      return (
        <svg className="tech-icon" viewBox="0 0 24 24" fill="none">
          <path d="M8 5c0-1.7 1.3-3 3-3h3v6h-3c-1.7 0-3-1.3-3-3zm0 6c0-1.7 1.3-3 3-3h3v6h-3c-1.7 0-3-1.3-3-3zm0 6c0-1.7 1.3-3 3-3h3v3c0 1.7-1.3 3-3 3s-3-1.3-3-3zm6-9c1.7 0 3 1.3 3 3s-1.3 3-3 3V8zm0 6v6h3c1.7 0 3-1.3 3-3s-1.3-3-3-3h-3z" fill="#F24E1E" />
          <path d="M8 11c0-1.7 1.3-3 3-3h3v6h-3c-1.7 0-3-1.3-3-3z" fill="#A259FF" />
          <path d="M8 5c0-1.7 1.3-3 3-3h3v6h-3c-1.7 0-3-1.3-3-3z" fill="#F24E1E" />
          <path d="M14 2h-3c1.7 0 3 1.3 3 3V2z" fill="#FF7262" />
          <path d="M14 8c1.7 0 3 1.3 3 3s-1.3 3-3 3V8z" fill="#1ABCFE" />
          <path d="M11 14h3v6h-3c-1.7 0-3-1.3-3-3s1.3-3 3-3z" fill="#0ACF83" />
        </svg>
      )
    }
    if (lowerName.includes('burp')) {
      return (
        <svg className="tech-icon" viewBox="0 0 24 24" fill="#FF6600">
          <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="1" />
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="4" fill="#FFFFFF" />
          <path d="M12 2v20M2 12h20" stroke="#FFFFFF" strokeWidth="1" />
        </svg>
      )
    }
    return (
      <svg className="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
      </svg>
    )
  }

  return (
    <section id="skills">
      <h2 className="section-header-title">TECHNOLOGIES</h2>
      <p className="section-header-subtitle">Tools, languages, and frameworks I work with</p>
      <div className="skills-container">
        {skillSections.map((section, index) => (
          <div key={index} className="skill-section">
            <h3>{section.title}</h3>
            <div className="skills-badges">
              {section.skills.map((skill, idx) => (
                <span key={idx} className="skill-badge">
                  {getTechIcon(skill.name)}
                  <span className="skill-text">{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

