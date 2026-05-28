import '../assets/css/Skills.css'

interface Skill {
  name: string
  color: string
  icon?: string
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
        { name: "C/C++", color: "color-cpp" }
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
        { name: "Node.js", color: "color-nodejs" }
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
        { name: "Figma", color: "color-figma" }
      ]
    }
  ]

  return (
    <section id="skills">
      <br />
      <br />
      <h2>Skills & Technologies</h2>
      <div className="skills-container">
        {skillSections.map((section, index) => (
          <div key={index} className="skill-section">
            <h3>{section.title}</h3>
            <div className="skills-badges">
              {section.skills.map((skill, idx) => (
                <span key={idx} className={`skill-badge ${skill.color}`}>
                  {skill.name}
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
