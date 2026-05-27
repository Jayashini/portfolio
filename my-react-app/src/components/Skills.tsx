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
        { name: "CSS", color: "color-css" },
        { name: "HTML", color: "color-html" },
        { name: "JavaScript", color: "color-js" },
        { name: "PHP", color: "color-php" },
        { name: "TypeScript", color: "color-ts" }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "Astro", color: "color-astro" },
        { name: "Google Maps", color: "color-maps" },
        { name: "Nuxt", color: "color-nuxt" },
        { name: "React", color: "color-react" },
        { name: "SASS", color: "color-sass" },
        { name: "Svelte", color: "color-svelte" },
        { name: "SvelteKit", color: "color-sveltekit" },
        { name: "Tailwind CSS", color: "color-tailwind" },
        { name: "Vue", color: "color-vue" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Appwrite", color: "color-appwrite" },
        { name: "Express", color: "color-express" },
        { name: "Fastify", color: "color-fastify" },
        { name: "Lucia", color: "color-lucia" },
        { name: "Node.js", color: "color-nodejs" },
        { name: "Prisma", color: "color-prisma" }
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
