import './Skills.css'

interface SkillCategory {
  id: number
  category: string
  skills: string[]
}

function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      category: "Frontend Development",
      skills: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      id: 2,
      category: "Backend Development",
      skills: ["Node.js", "PHP"]
    },
    {
      id: 3,
      category: "Database & Storage",
      skills: ["MySQL", "MongoDB", "PostgreSQL"]
    },
    {
      id: 4,
      category: "Programming Languages",
      skills: ["C++", "C", "Python"]
    },
    {
      id: 5,
      category: "DevOps & Tools",
      skills: ["GitHub"]
    },
    {
      id: 6,
      category: "Design & UI/UX",
      skills: ["Figma", "Canva"]
    }
  ]

  return (
    <section id="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.id} className="skill-card">
            <h3>{category.category}</h3>
            <div className="skills-tags">
              {category.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
